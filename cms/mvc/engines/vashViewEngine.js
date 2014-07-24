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

    findView: function(controllerContext, viewName) {
        var areas = controllerContext.app.areas;
        var controllerName = controllerContext.controller.name();
        //
        var availableDirectories = [];
        availableDirectories.push(path.join(controllerContext.routeArea.viewsPath, controllerName));
        availableDirectories.push(controllerContext.routeArea.viewsSharedPath);
        if (controllerContext.routeArea !== areas.rootArea()) {
            availableDirectories.push(areas.rootArea().viewsSharedPath);
        }
        //
        var searchedLocations = [], foundFile;
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
            var self = this;
            view = new vashView({
                filePath: foundFile,
                findView: function(name) {
                    var viewEngineResult = self.findView(controllerContext, name);
                    if (viewEngineResult.view) {
                        return viewEngineResult.view.filePath;
                    } else {
                        throw new Error('Failed to lookup view "' + name + '" in the following locations <br/>' + viewEngineResult.searchedLocations.join('<br/>'));
                    }
                }
            });
        }
        //
        return {
            view: view,
            viewEngine: this,
            searchedLocations: searchedLocations
        };
    },

    releaseView: function(controllerContext, view) {
        if (view.destroy) {
            view.destroy();
        }
    }
};
