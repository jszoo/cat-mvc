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

var CONSTS = {
    Root: '/root',
    Areas: 'areas',
    Views: 'views',
    Shared: 'shared',
    Controllers: 'ctrls',
    Events: 'areaEvents.js'
};

var mvcAreas = module.exports = function(appPath) {
    this.appPath = appPath;
    this.areasPath = path.join(appPath, CONSTS.Areas);
    this.events = new events.EventEmitter();
    this._inner = caching.region('mvc-areas-cache');
};

mvcAreas.CONSTS = CONSTS;

mvcAreas.prototype = {

    _inner: null, _routeSet: null,

    appPath: null, areasPath: null, events: null,

    constructor: mvcAreas, className: 'mvcAreas',

    all: function() {
        return this._inner.all();
    },

    get: function(areaName) {
        return this._inner.get(areaName);
    },

    rootArea: function() {
        return this._inner.get(CONSTS.Root);
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
            area.fireEvent('onUnload');
            this.events.emit('unload', area);
        }
        return this._inner.remove(areaName);
    },

    register: function(areaName, areaRoute, defaultRouteValues) {
        var areaDirectory = areaName, self = this;
        if (areaName === CONSTS.Root) { areaDirectory = path.sep + '..'; }
        var area, areaPath = path.normalize(path.join(this.areasPath, areaDirectory));
        if (fs.existsSync(areaPath) && fs.statSync(areaPath).isDirectory()) {
            // area obj
            area = new mvcArea({
                name: areaName,
                path: areaPath,
                viewsPath: path.join(areaPath, CONSTS.Views),
                viewsSharedPath: path.join(areaPath, CONSTS.Views, CONSTS.Shared),
                controllersPath: path.join(areaPath, CONSTS.Controllers)
            });
            //
            area.routes.events.on('changed', function() { self._routeSet = null; });
            // map route
            area.routes.set(areaName, areaRoute, defaultRouteValues);
            // load default subscribes
            area.subevents.load(path.join(area.path, CONSTS.Events));
            // read 'areas/account/ctrls'
            area.controllers.loaddir(area.controllersPath);
        }
        //
        if (area) {
            area.fireEvent('onRegister');
            this.events.emit('register', area);
            this._inner.set(area.name, area);
        }
        // ret
        return area;
    },
    
    registerAll: function() {
        this.register(
            (CONSTS.Root),
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
