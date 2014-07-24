/*
* vashViewEngine
* author: ronglin
* create date: 2014.7.24
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('../utilities'),
    vashView = require('./vashView');

var vashViewEngine = module.exports = function(set) {
    utils.extend(this, set);
};

vashViewEngine.prototype = {

    extname: '.vash',

    constructor: vashViewEngine, className: 'vashViewEngine',

    _getAvailableDirectories: function(controllerContext) {
        var areas = controllerContext.app.areas;
        var controllerName = controllerContext.controller.name();
        //
        var directories = [];
        directories.push(path.join(controllerContext.routeArea.viewsPath, controllerName));
        directories.push(controllerContext.routeArea.viewsSharedPath);
        if (controllerContext.routeArea !== areas.rootArea()) {
            directories.push(areas.rootArea().viewsSharedPath);
        }
        // ret
        return directories;
    },

    _findViewSync: function(controllerContext, viewName) {
        var self = this, foundFile, searchedLocations = [];
        var availableDirectories = this._getAvailableDirectories(controllerContext);
        for (var i = 0; i < availableDirectories.length; i++) {
            var file = path.join(availableDirectories[i], viewName + this.extname);
            searchedLocations.push(file);
            if (fs.existsSync(file) && fs.statSync(file).isFile()) {
                foundFile = file;
                break;
            }
        }
        //
        var view;
        if (foundFile) {
            view = new vashView({
                filePath: foundFile
            });
        }
        //
        return {
            view: view,
            searchedLocations: searchedLocations
        };
    },

    findView: function(controllerContext, viewName, callback) {
        callback = utils.deferProxy(callback);
        var self = this, index = 0, searchedLocations = [];
        var availableDirectories = this._getAvailableDirectories(controllerContext);
        //
        var done = function(file) {
            var view;
            if (file) {
                view = new vashView({
                    filePath: file,
                    findLayout: function(name) {
                        var viewEngineResult = self._findViewSync(controllerContext, name);
                        if (viewEngineResult.view) {
                            return viewEngineResult.view.filePath;
                        } else {
                            callback(new Error('Failed to lookup view "' + name + '" in the following locations <br/>' + viewEngineResult.searchedLocations.join('<br/>')));
                        }
                    }
                });
            }
            callback(null, {
                view: view,
                searchedLocations: searchedLocations
            });
        };
        //
        var next = function() {
            if (index >= availableDirectories.length) {
                done();
                return;
            }
            var file = path.join(availableDirectories[index++], viewName + self.extname);
            searchedLocations.push(file);
            fs.exists(file, function(exists) {
                if (exists) {
                    fs.stat(file, function(err, stats) {
                        if (err) {
                            callback(err);
                        } else if (stats.isFile()) {
                            done(file);
                        } else {
                            next();
                        }
                    });
                } else {
                    next();
                }
            });
        };
        //
        next();
    },

    releaseView: function(controllerContext, view) {
        if (view.destroy) {
            view.destroy();
        }
    }
};
