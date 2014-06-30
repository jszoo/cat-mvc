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
    this.routes = {};
};

mvcArea.isArea = true;
mvcArea.prototype = {

    name: null, path: null,

    controllers: null, routes: null, extensions:null,

    constructor: mvcArea,

    mapRoute: function(routeExp, defaultRoute) {
        var values = utils.isObject(defaultRoute) ? defaultRoute : {};
        this.routes[routeExp.toLowerCase()] = {
            expression: routeExp,
            defaultRoute: values
        };
    },

    removeRoute: function(routeExp) {
        return (delete this.routes[routeExp.toLowerCase()]);
    },

    clearRoutes: function() {
        this.routes = {};
    },

    loadController: function(filePath) {
        if (fs.statSync(filePath).isFile()) {
            var ctrl = require(filePath);
            if (ctrl && ctrl.__proto__.constructor.isController === true) {
                if (!ctrl.name()) {
                    var extName = path.extname(filePath);
                    ctrl.name(path.basename(filePath, extName));
                }
                ctrl.path(filePath);
                this.controllers[ctrl.name().toLowerCase()] = ctrl;
            }
        }
    },

    unloadController: function(filePath) {
        var extName = path.extname(filePath);
        var ctrlName = path.basename(filePath, extName);
        return (delete this.controllers[ctrlName.toLowerCase()]);
    },

    clearControllers: function() {
        this.controllers = {};
    },

    loadExtension: function(filePath) {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            this.extensions[filePath.toLowerCase()] = require(filePath);
        }
    },

    unloadExtension: function(filePath) {
        return (delete this.extensions[filePath.toLowerCase()]);
    },

    clearExtensions: function() {
        this.extensions = {};
    },

    fireExtension: function(funcName) {
        var self = this;
        utils.each(this.extensions, function(k, ext) {
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

    register: function(areaName, areaRoute, defaultRoute) {
        var areaDirectory = areaName;
        if (areaName === this.rootAreaName) { areaDirectory = path.sep + '..'; }
        var area, areaPath = path.normalize(path.join(this._areasPath, areaDirectory));
        if (fs.existsSync(areaPath) && fs.statSync(areaPath).isDirectory()) {
            // area obj
            area = new mvcArea({
                name: areaName,
                path: areaPath
            });
            // map route
            area.mapRoute(areaRoute, defaultRoute);
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
        this.register(
            (this.rootAreaName),
            ('/:controller/:action'),
            ({ controller: 'home', action: 'index' })
        );
        var self = this, areasDirs = fs.readdirSync(this._areasPath);
        utils.each(areasDirs, function(i, areaName) {
            self.register(
                (areaName),
                ('/' + areaName + '/:controller/:action'),
                ({ controller: 'home', action: 'index' })
            );
        });
        return this.all();
    }
};
