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

    all: function() {
        return this._areas.all();
    },

    unload: function(areaName) {
        return this._areas.remove(areaName);
    },

    register: function(areaName) {
        var area, areaPath = path.join(this._areasPath, areaName);
        if (fs.statSync(areaPath).isDirectory()) {
            // read 'areas/account/controllers'
            var controllersPath = path.join(areaPath, 'controllers');
            if (fs.existsSync(controllersPath)) {
                // obj
                area = {
                    areaName: areaName,
                    areaPath: areaPath,
                    controllers: {}
                };
                // read 'areas/account/controllers/logon.js'
                var controllerFiles = fs.readdirSync(controllersPath);
                utils.each(controllerFiles, function(i, controllerFile) {
                    var controllerFilePath = path.join(controllersPath, controllerFile);
                    if (fs.statSync(controllerFilePath).isFile()) {
                        //
                        var ctrl = require(controllerFilePath);
                        if (!ctrl.name()) {
                            var baseName = path.basename(controllerFile, '.js');
                            ctrl.name(baseName.toLowerCase());
                        }
                        area.controllers[ctrl.name()] = ctrl;
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
        var self = this, areasDirs = fs.readdirSync(this._areasPath);
        utils.each(areasDirs, function(i, areaName) { self.register(areaName); });
        return this.all();
    }
};