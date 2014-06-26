/*
* mvcArea
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    events = require('events'),
    utils = require('./utilities'),
    caching = require('./caching');

module.exports = {

    events: new events.EventEmitter(),

    _areasPath: utils.absPath('areas'),

    _areas: caching.region('mvc-areas-cache'),

    rootArea: utils.unique(8).toUpperCase(),

    all: function() {
        return this._areas.all();
    },

    unload: function(areaName) {
        return this._areas.remove(areaName);
    },

    register: function(areaName) {
        var areaDirname = areaName;
        if (areaName === this.rootArea) { areaDirname = path.sep + '..'; }
        var area, areaPath = path.normalize(path.join(this._areasPath, areaDirname));
        if (fs.statSync(areaPath).isDirectory()) {
            // read 'areas/account/ctrls'
            var ctrlsPath = path.join(areaPath, 'ctrls');
            if (fs.existsSync(ctrlsPath)) {
                // obj
                area = {
                    areaName: areaName,
                    areaPath: areaPath,
                    controllers: {}
                };
                // read 'areas/account/ctrls/logon.js'
                var ctrlFiles = fs.readdirSync(ctrlsPath);
                utils.each(ctrlFiles, function(i, ctrlFileName) {
                    var ctrlFilePath = path.join(ctrlsPath, ctrlFileName);
                    if (fs.statSync(ctrlFilePath).isFile()) {
                        //
                        var ctrl = require(ctrlFilePath);
                        if (ctrl && utils.isFunction(ctrl.name)) {
                            if (!ctrl.name()) {
                                var baseName = path.basename(ctrlFileName, '.js');
                                ctrl.name(baseName.toLowerCase());
                            }
                            area.controllers[ctrl.name()] = ctrl;
                        }
                    }
                });
            }
        }
        //
        if (area) {
            this._areas.set(areaName, area);
            this.events.emit('register', area);
        }
        // ret
        return area;
    },
    
    registerAll: function(app) {
        this.register(this.rootArea);
        var self = this, areasDirs = fs.readdirSync(this._areasPath);
        utils.each(areasDirs, function(i, areaName) { self.register(areaName); });
        return this.all();
    }
};