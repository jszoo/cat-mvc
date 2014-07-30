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

var names = {
    areas: 'areas',
    views: 'views',
    shared: 'shared',
    controllers: 'controllers',
    subevents: 'events.js'
};

var mvcAreas = module.exports = function(app, store) {
    this.app = app;
    this.events = new events.EventEmitter();
    this._inner = caching.region('mvc-areas-cache', store);
};

mvcAreas.names = names;

mvcAreas.prototype = {

    _inner: null, _routeSet: null,

    app: null, events: null,

    constructor: mvcAreas, className: 'mvcAreas',

    conf: function(name) {
        return this.app.get(name) || utils.readObj({ names: names }, name);
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

    register: function(areaPath, areaName, areaRouteExpression, defaultRouteValues) {
        if (!fs.existsSync(areaPath) || !fs.statSync(areaPath).isDirectory()) {
            throw new Error('The specified "areaPath" is invalid');
        }
        // area obj
        var area = new mvcArea({
            name: areaName,
            path: areaPath,
            viewsPath:       path.join(areaPath, this.conf('names.views')),
            viewsSharedPath: path.join(areaPath, this.conf('names.views'), this.conf('names.shared')),
            controllersPath: path.join(areaPath, this.conf('names.controllers')),
            eventsFilePath:  path.join(areaPath, this.conf('names.subevents'))
        }, this._inner.sto());
        // map route
        var self = this;
        area.routes.events.on('changed', function() { self._routeSet = null; });
        area.routes.set(areaName, areaRouteExpression, defaultRouteValues);
        // load default subscribes
        area.subevents.load(area.eventsFilePath);
        // read 'areas/account/controllers'
        area.controllers.loaddir(area.controllersPath);
        //
        area.fireEvent('onRegister');
        this.events.emit('register', area);
        this._inner.set(area.name, area);
        // ret
        return area;
    },

    registerRoot: function(rootPath) {
        if (this.rootArea()) {
            throw new Error('Root area already exists, only one root area is allowed');
        }
        this.register(
            (rootPath),
            (consts.root),
            ('/:controller?/:action?'),
            ({ controller: 'home', action: 'index' })
        );
    },

    registerAreas: function(areasPath) {
        if (!fs.existsSync(areasPath) || !fs.statSync(areasPath).isDirectory()) {
            throw new Error('The specified "areasPath" is invalid');
        }
        var self = this, areaDirs = fs.readdirSync(areasPath);
        utils.each(areaDirs, function(i, areaName) {
            var areaPath = path.join(areasPath, areaName);
            self.register(
                (areaPath),
                (areaName),
                ('/' + areaName + '/:controller?/:action?'),
                ({ controller: 'home', action: 'index' })
            );
        });
    },

    registerAll: function(rootPath) {
        if (utils.isString(rootPath) && utils.isAbsolute(rootPath)) {
            this.registerRoot(rootPath);
            this.registerAreas(path.join(rootPath, this.conf('names.areas')));
        }
        else if (this.app.hasPath()) {
            this.registerRoot(this.app.mapPath('~/'));
            this.registerAreas(this.app.mapPath(this.conf('names.areas')));
        }
    }
};
