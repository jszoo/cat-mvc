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


var CONST_Areas = 'areas',
    CONST_Views = 'views',
    CONST_Shared = 'shared',
    CONST_Controllers = 'ctrls',
    CONST_Subscribes = 'areaSubs.js';

var _areas = caching.region('mvc-areas-cache');
var _areasPath = utils.absolutePath(CONST_Areas);
var _routeSet = null;

module.exports = {

    events: new events.EventEmitter(),

    all: function() {
        return _areas.all();
    },

    get: function(areaName) {
        return _areas.get(areaName);
    },

    routeSet: function() {
        if (!_routeSet) {
            var rs = _routeSet = {};
            utils.each(this.all(), function() {
                utils.each(this.ownedRoutes(), function(key, val) {
                    rs[key] = val;
                });
            });
        }
        return _routeSet;
    },

    unload: function(areaName) {
        var area = this.get(areaName);
        if (area) {
            area.fireSubscribes('onUnload');
            this.events.emit('unload', area);
        }
        return _areas.remove(areaName);
    },

    register: function(areaName, areaRoute, defaultRouteValues) {
        var areaDirectory = areaName;
        if (areaName === '*root') { areaDirectory = path.sep + '..'; }
        var area, areaPath = path.normalize(path.join(_areasPath, areaDirectory));
        if (fs.existsSync(areaPath) && fs.statSync(areaPath).isDirectory()) {
            // area obj
            area = new mvcArea({
                name: areaName,
                path: areaPath,
                viewsPath: path.join(areaPath, CONST_Views),
                viewsSharedPath: path.join(areaPath, CONST_Views, CONST_Shared);
                controllersPath: path.join(areaPath, CONST_Controllers)
            });
            //
            area.routes.events.on('changed', function() { _routeSet = null; });
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
            _areas.set(area.name, area);
        }
        // ret
        return area;
    },
    
    registerAll: function() {
        this.register(
            ('*root'),
            ('/:controller?/:action?'),
            ({ controller: 'home', action: 'index' })
        );
        var self = this, areasDirs = fs.readdirSync(_areasPath);
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
