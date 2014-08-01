/*
* mvcAreas
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    events = require('events'),
    utils = require('./utilities'),
    caching = require('./caching'),
    mvcArea = require('./mvcArea');

var mvcAreas = module.exports = function(app, store) {
    this.app = app;
    this.events = new events.EventEmitter();
    this._inner = caching.region('mvc-areas-cache', store);
};

var consts = {
    root: '/root'
};

var fileNames = mvcAreas.fileNames = {
    areaSetting: 'area.js'
};

var folderNames = mvcAreas.folderNames = {
    areas: 'areas',
    views: 'views',
    shared: 'shared',
    models: 'models',
    controllers: 'controllers'
};

mvcAreas.prototype = {

    _inner: null, _routeSet: null,

    app: null, events: null,

    constructor: mvcAreas, className: 'mvcAreas',

    conf: function(name) {
        return this.app.get(name) || utils.readObj({ fileNames: fileNames, folderNames: folderNames }, name);
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
            viewsPath:       path.join(areaPath, this.conf('folderNames.views')),
            viewsSharedPath: path.join(areaPath, this.conf('folderNames.views'), this.conf('folderNames.shared')),
            modelsPath:      path.join(areaPath, this.conf('folderNames.models')),
            controllersPath: path.join(areaPath, this.conf('folderNames.controllers')),
            settingFilePath: path.join(areaPath, this.conf('fileNames.areaSetting'))
        }, this._inner.sto());
        // load setting
        var settPath = area.settingFilePath;
        if (fs.existsSync(settPath) && fs.statSync(settPath).isFile()) {
            var settProcedure = mvcArea.loadSetting(settPath);
            if (utils.isFunction(settProcedure)) {
                settProcedure.call(area);
            }
        }
        // load 'areas/account/models'
        area.models.loaddir(area.modelsPath);
        // load 'areas/account/controllers'
        area.controllers.loaddir(area.controllersPath);
        // map route
        var self = this;
        area.routes.events.on('changed', function() { self._routeSet = null; });
        area.routes.set(area.name, areaRouteExpression, defaultRouteValues);
        //
        area.fireEvent('onRegister');
        this.events.emit('register', area);
        //
        if (!this._inner.exists(area.name)) {
            this._inner.set(area.name, area);
        } else {
            throw new Error('Duplicated area name: ' + area.name);
        }
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
            if (fs.statSync(areaPath).isDirectory()) {
                self.register(
                    (areaPath),
                    (areaName),
                    ('/' + areaName + '/:controller?/:action?'),
                    ({ controller: 'home', action: 'index' })
                );
            }
        });
    },

    registerAll: function(rootPath) {
        if (utils.isString(rootPath) && utils.isAbsolute(rootPath)) {
            this.registerRoot(rootPath);
            this.registerAreas(path.join(rootPath, this.conf('folderNames.areas')));
        }
        else if (this.app.hasPath()) {
            this.registerRoot(this.app.mapPath('~/'));
            this.registerAreas(this.app.mapPath(this.conf('folderNames.areas')));
        }
    }
};
