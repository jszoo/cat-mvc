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

var consts = {
    root: '/root'
};

var config = {
    areas: 'areas',
    views: 'views',
    shared: 'shared',
    controllers: 'ctrls',
    events: 'events.js'
};

var mvcAreas = module.exports = function(app) {
    this.app = app;
    this.events = new events.EventEmitter();
    this._inner = caching.region('mvc-areas-cache');
};

mvcAreas.config = config;

mvcAreas.prototype = {

    _inner: null, _routeSet: null,

    app: null, events: null,

    constructor: mvcAreas, className: 'mvcAreas',

    conf: function(name) {
        return this.app.get(name) || utils.readObj({ config: config }, name);
    },

    all: function() {
        return this._inner.all();
    },

    get: function(areaName) {
        return this._inner.get(areaName);
    },

    rootArea: function() {
        return this._inner.get(consts.root);
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
        if (areaName === consts.root) { areaDirectory = path.sep + '..'; }
        var areasPath = this.app.mapPath(this.conf('config.areas'));
        var area, areaPath = path.normalize(path.join(areasPath, areaDirectory));
        if (fs.existsSync(areaPath) && fs.statSync(areaPath).isDirectory()) {
            // area obj
            area = new mvcArea({
                name: areaName,
                path: areaPath,
                viewsPath: path.join(areaPath, self.conf('config.views')),
                controllersPath: path.join(areaPath, self.conf('config.controllers')),
                viewsSharedPath: path.join(areaPath, self.conf('config.views'), self.conf('config.shared'))
            });
            //
            area.routes.events.on('changed', function() { self._routeSet = null; });
            // map route
            area.routes.set(areaName, areaRoute, defaultRouteValues);
            // load default subscribes
            area.subevents.load(path.join(area.path, self.conf('config.events')));
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
            (consts.root),
            ('/:controller?/:action?'),
            ({ controller: 'home', action: 'index' })
        );
        var areasPath = this.app.mapPath(this.conf('config.areas'));
        var self = this, areasDirs = fs.readdirSync(areasPath);
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
