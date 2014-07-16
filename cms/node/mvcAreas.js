/*
* mvcAreas
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    events = require('events'),
    utils = require('./utilities'),
    caching = require('./caching'),
    mvcArea = require('./mvcArea');

var CONST_Root = '/root',
    CONST_Areas = 'areas',
    CONST_Views = 'views',
    CONST_Shared = 'shared',
    CONST_Controllers = 'ctrls',
    CONST_Subscribes = 'areaSubs.js';

var mvcAreas = module.exports = function(rootPath) {
    this._inner = caching.region('mvc-areas-cache');
    this.rootPath = rootPath;
    this.areasPath = path.join(rootPath, CONST_Areas);
    this.events = new events.EventEmitter();
};

mvcAreas.prototype = {

    _inner: null, _routeSet: null,

    rootPath: null, areasPath: null, events: null,

    constructor: mvcAreas, className: 'mvcAreas',

    all: function() {
        return this._inner.all();
    },

    get: function(areaName) {
        return this._inner.get(areaName);
    },

    rootArea: function() {
        return this._inner.get(CONST_Root);
    },

    routeSet: function() {
        if (!this._routeSet) {
            var rs = this._routeSet = {};
            utils.each(this.all(), function() {
                utils.each(this.ownedRoutes(), function(key, val) {
                    rs[key] = val;
                });
            });
        }
        return this._routeSet;
    },

    unload: function(areaName) {
        var area = this.get(areaName);
        if (area) {
            area.fireSubscribes('onUnload');
            this.events.emit('unload', area);
        }
        return this._inner.remove(areaName);
    },

    register: function(areaName, areaRoute, defaultRouteValues) {
        var areaDirectory = areaName, self = this;
        if (areaName === CONST_Root) { areaDirectory = path.sep + '..'; }
        var area, areaPath = path.normalize(path.join(this.areasPath, areaDirectory));
        if (fs.existsSync(areaPath) && fs.statSync(areaPath).isDirectory()) {
            // area obj
            area = new mvcArea({
                name: areaName,
                path: areaPath,
                viewsPath: path.join(areaPath, CONST_Views),
                viewsSharedPath: path.join(areaPath, CONST_Views, CONST_Shared),
                controllersPath: path.join(areaPath, CONST_Controllers)
            });
            //
            area.routes.events.on('changed', function() { self._routeSet = null; });
            // map route
            area.routes.set(areaName, areaRoute, defaultRouteValues);
            // load default subscribes
            area.subscribes.load(path.join(area.path, CONST_Subscribes));
            // read 'areas/account/ctrls'
            var ctrlsPath = area.controllersPath;
            if (fs.existsSync(ctrlsPath) && fs.statSync(ctrlsPath).isDirectory()) {
                // read 'areas/account/ctrls/logon.js'
                var ctrlFiles = fs.readdirSync(ctrlsPath);
                utils.each(ctrlFiles, function(i, ctrlFileName) {
                    area.controllers.load(path.join(ctrlsPath, ctrlFileName));
                });
            }
        }
        //
        if (area) {
            area.fireSubscribes('onRegister');
            this.events.emit('register', area);
            this._inner.set(area.name, area);
        }
        // ret
        return area;
    },
    
    registerAll: function() {
        this.register(
            (CONST_Root),
            ('/:controller?/:action?'),
            ({ controller: 'home', action: 'index' })
        );
        var self = this, areasDirs = fs.readdirSync(this.areasPath);
        utils.each(areasDirs, function(i, areaName) {
            self.register(
                (areaName),
                ('/' + areaName + '/:controller?/:action?'),
                ({ controller: 'home', action: 'index' })
            );
        });
        return this.all();
    }
};
