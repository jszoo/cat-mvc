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
    CONST_Events = 'areaEvents.js';


var mvcArea = function(set) {
    utils.extend(this, set);
    this.controllers = {};
    this.extensions = {};
};

mvcArea.prototype = {

    name: null, path: null, route: null,

    controllers: null, extensions:null,

    constructor: mvcArea,

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
    },

    loadExtension: function(filePath) {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            this.extensions[filePath.toLowerCase()] = require(filePath);
        }
    },

    fireExtension: function(funcName) {
        var self = this;
        utils.each(this.extensions, function(key, ext) {
            if (ext && utils.isFunction(ext[funcName])) {
                ext[funcName](self);
            }
        });
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
        var area = this.get(areaName);
        if (area) {
            area.fireExtension('onUnload');
            this.events.emit('unload', area);
            return this._areas.remove(areaName);
        }
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
            // load default extension
            area.loadExtension(path.join(area.path, CONST_Events));
            // read 'areas/account/ctrls'
            var ctrlsPath = path.join(area.path, CONST_Ctrls);
            if (fs.existsSync(ctrlsPath) && fs.statSync(ctrlsPath).isDirectory()) {
                // read 'areas/account/ctrls/logon.js'
                var ctrlFiles = fs.readdirSync(ctrlsPath);
                utils.each(ctrlFiles, function(i, ctrlFileName) {
                    area.loadController(path.join(ctrlsPath, ctrlFileName));
                });
            }
        }
        //
        if (area) {
            area.fireExtension('onRegister');
            this.events.emit('register', area);
            this._areas.set(area.name, area);
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
