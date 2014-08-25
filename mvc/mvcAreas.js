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
    utils = require('zoo-utils'),
    caching = require('zoo-cache'),
    mvcArea = require('./mvcArea');

var mvcAreas = module.exports = function(app, store) {
    this.app = app;
    this._inner = caching.region('mvc-areas-cache', store);
    mvcAreas.superclass.constructor.call(this);
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

utils.inherit(mvcAreas, events.EventEmitter, {

    _inner: null, _routeSet: null, app: null,

    all: function() {
        return this._inner.all();
    },

    get: function(areaName) {
        return this._inner.get(areaName);
    },

    exists: function(areaName) {
        return this._inner.exists(areaName);
    },

    count: function() {
        return this._inner.count();
    },

    clear: function() {
        var self = this;
        utils.each(this.all(), function() {
            self.unload(this.name);
        });
        return this;
    },

    set: function(areaName, area) {
        if (area === undefined) {
            area = areaName;
            areaName = null;
        }
        //
        if (!area) { throw new Error('Area object is required'); }
        if (!(area instanceof mvcArea)) { throw new Error('The specified area is invalid type'); }
        //
        areaName = (areaName || area.name);
        //
        if (!utils.isString(areaName)) { throw new Error(utils.format('Area name requires string type but got {0} type', utils.type(areaName))); }
        if (!areaName) { throw new Error('Area name is required'); }
        if (!/^[0-9a-zA-Z_-]+$/.test(areaName)) { throw new Error(utils.format('Area name "{0}" is invalid', areaName)); }
        if (this.exists(areaName)) { throw new Error(utils.format('Area "{0}" is duplicated', areaName)); }
        //
        area.name            = areaName;
        area.viewsPath       = path.join(area.areaPath, this.conf('folderNames.views'));
        area.viewsSharedPath = path.join(area.areaPath, this.conf('folderNames.views'), this.conf('folderNames.shared'));
        area.modelsPath      = path.join(area.areaPath, this.conf('folderNames.models'));
        area.controllersPath = path.join(area.areaPath, this.conf('folderNames.controllers'));
        area.settingFilePath = path.join(area.areaPath, this.conf('fileNames.areaSetting'));
        // connect filters
        area.filters.parent(this.app.filters);
        // load 'areas/account/area.js'
        var settPath = area.settingFilePath;
        if (fs.existsSync(settPath) && fs.statSync(settPath).isFile()) {
            var settProcedure = mvcArea.loadSetting(settPath);
            if (utils.isFunction(settProcedure)) {
                settProcedure.call(area);
            }
        }
        // load builtin model metas and 'areas/account/models'
        area.modelMetas.clear();
        area.modelMetas.loaddir(path.join(__dirname, 'modelMeta'));
        area.modelMetas.loaddir(area.modelsPath);
        // load 'areas/account/controllers'
        area.controllers.clear();
        area.controllers.loaddir(area.controllersPath);
        // map route
        var self = this;
        area.routes.clear();
        area.routes.removeAllListeners();
        area.routes.on('changed', function() { self._routeSet = null; });
        area.routes.register(area.name, areaRouteExpression, defaultRouteValues);
        //
        this._inner.set(area.name, area);
        return this;
    },

    register: function(areaPath, areaName, areaRouteExpression, defaultRouteValues) {
        if (!fs.existsSync(areaPath) || !fs.statSync(areaPath).isDirectory()) {
            throw new Error(utils.format('The specified areasPath "{0}" is invalid', areaPath));
        }
        // new area
        var area = new mvcArea({
            name: areaName,
            path: areaPath
        }, this._inner.sto());
        // store
        this.set(areaName, area);
        // fire event
        this.emit('register', area);
        area.fireEvent('onRegister', area);
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

    registerArea: function(areaPath, areaName) {
        this.register(
            (areaPath),
            (areaName),
            ('/' + areaName + '/:controller?/:action?'),
            ({ controller: 'home', action: 'index' })
        );
    },

    registerAreas: function(areasPath) {
        if (!fs.existsSync(areasPath) || !fs.statSync(areasPath).isDirectory()) {
            throw new Error(utils.format('The specified areasPath "{0}" is invalid', areaPath));
        }
        var self = this, areaDirs = fs.readdirSync(areasPath);
        utils.each(areaDirs, function(i, areaName) {
            var areaPath = path.join(areasPath, areaName);
            if (fs.statSync(areaPath).isDirectory()) {
                self.registerArea(areaPath, areaName);
            }
        });
    },

    discover: function(rootPath) {
        if (utils.isString(rootPath) && utils.isAbsolute(rootPath)) {
            this.registerRoot(rootPath);
            this.registerAreas(path.join(rootPath, this.conf('folderNames.areas')));
        }
        else if (this.app.hasPath()) {
            this.registerRoot(this.app.mapPath('~/'));
            this.registerAreas(this.app.mapPath(this.conf('folderNames.areas')));
        }
    },

    conf: function(name) {
        return this.app.get(name) || utils.readObj({ fileNames: fileNames, folderNames: folderNames }, name);
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
            this.emit('unload', area);
            area.fireEvent('onUnload', area);
            area.modelMetas.clear();
            area.controllers.clear();
            area.routes.clear();
            this._routeSet = null;
        }
        this._inner.remove(areaName);
    },

    unloadRoot: function() {
        this.unload(consts.root);
    }
});
