/*
* ejsViewEngine
* author: ronglin
* create date: 2014.7.24
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('../utilities'),
    ejsView = require('./ejsView');

var ejsViewEngine = module.exports = function(set) {
    utils.extend(this, set);
};

ejsViewEngine.prototype = {

    extname: '.ejs',

    constructor: ejsViewEngine, className: 'ejsViewEngine',

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

    findView: function(controllerContext, viewName, callback) {
        callback = utils.deferProxy(callback);
        var self = this, index = 0, searchedLocations = [];
        var availableDirectories = this._getAvailableDirectories(controllerContext);
        //
        var done = function(file) {
            var view;
            if (file) {
                view = new ejsView({
                    filePath: file
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
        if (view.release) {
            view.release();
        }
    }
};
