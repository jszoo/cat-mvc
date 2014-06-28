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


var CONST_Areas = 'areas',
    CONST_Ctrls = 'ctrls',
    CONST_AreaEx = 'areaEx.js';


var mvcArea = function(set) {
    utils.extend(this, set);
    this.controllers = {};
};

mvcArea.prototype = {

    name: null, path: null, route: null,

    constructor: mvcArea, controllers: null,

    loadController: function(filePath) {
        if (fs.statSync(filePath).isFile()) {
            var ctrl = require(filePath);
            if (ctrl && utils.isFunction(ctrl.name)) {
                if (!ctrl.name()) {
                    var extname = path.extname(filePath);
                    var baseName = path.basename(filePath, extname);
                    ctrl.name(baseName.toLowerCase());
                }
                ctrl.path(filePath);
                this.controllers[ctrl.name()] = ctrl;
            }
        }
    }
};


module.exports = {

    _areasPath: utils.absPath(CONST_Areas),

    _areas: caching.region('mvc-areas-cache'),

    rootAreaName: utils.unique(8).toUpperCase(),

    events: new events.EventEmitter(),

    all: function() {
        return this._areas.all();
    },

    get: function(areaName) {
        return this._areas.get(areaName);
    },

    unload: function(areaName) {
        this.events.emit('unload', areaName);
        return this._areas.remove(areaName);
    },

    register: function(areaName, areaRoute) {
        var areaDirectory = areaName;
        if (areaName === this.rootAreaName) { areaDirectory = path.sep + '..'; }
        var area, areaPath = path.normalize(path.join(this._areasPath, areaDirectory));
        if (fs.existsSync(areaPath) && fs.statSync(areaPath).isDirectory()) {
            // area obj
            area = new mvcArea({
                name: areaName,
                path: areaPath,
                route: areaRoute
            });
            // read 'areas/account/ctrls'
            var ctrlsPath = path.join(areaPath, CONST_Ctrls);
            if (fs.existsSync(ctrlsPath) && fs.statSync(ctrlsPath).isDirectory()) {
                // read 'areas/account/ctrls/logon.js'
                var ctrlFiles = fs.readdirSync(ctrlsPath);
                utils.each(ctrlFiles, function(i, ctrlFileName) {
                    area.loadController(path.join(ctrlsPath, ctrlFileName));
                });
            }
            // call areaEx if exists
            if (area.name !== this.rootAreaName) {
                var areaExFile = path.join(areaPath, CONST_AreaEx);
                if (fs.existsSync(areaExFile) && fs.statSync(areaExFile).isFile()) {
                    var areaEx = require(areaExFile);
                    if (areaEx && utils.isFunction(areaEx.onRegister)) {
                        areaEx.onRegister(area);
                    }
                }
            }
        }
        //
        if (area) {
            this._areas.set(area.name, area);
            this.events.emit('register', area);
        }
        // ret
        return area;
    },
    
    registerAll: function(app) {
        this.register(this.rootAreaName, ('/:controller/:action'));
        var self = this, areasDirs = fs.readdirSync(this._areasPath);
        utils.each(areasDirs, function(i, areaName) {
            var areaRoute = ('/' + areaName + '/:controller/:action');
            self.register(areaName, areaRoute);
        });
        return this.all();
    }
};
