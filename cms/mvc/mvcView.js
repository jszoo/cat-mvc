/*
* mvcView
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('./utilities');

var mvcView = module.exports = function(set) {
    utils.extend(this, set)
};

mvcView.prototype = {
    
    viewName: null, viewEngines: null,

    constructor: mvcView, className: 'mvcView',

    findView: function(viewContext, callback) {
        //TODO:
    },

    render: function(viewContext, callback) {
        var extname = this.viewEngines.default();
        var engine = this.viewEngines.get(extname);
        if (!engine) {
            callback(new Error('Failed to load view engine "' + extname + '"'));
            return;
        }
        //
        var areas = viewContext.app.areas;
        var ctrlName = viewContext.controller.name();
        //
        var findDirs = [];
        findDirs.push(path.join(viewContext.routeArea.viewsPath, ctrlName));
        findDirs.push(viewContext.routeArea.viewsSharedPath);
        if (viewContext.routeArea !== areas.rootArea()) {
            findDirs.push(areas.rootArea().viewsSharedPath);
        }
        //
        var findView = function(name) {
            for (var i = 0; i < findDirs.length; i++) {
                var file = path.join(findDirs[i], name + extname);
                if (fs.existsSync(file) && fs.statSync(file).isFile()) {
                    return file;
                }
            }
            throw new Error('Failed to lookup view "' + name + '" in the following directories "' + findDirs.join('<br/>') + '"');
        };
        //
        try {
            var data = {
                model: viewContext.viewData,
                url: viewContext.controller.url,
                __RULEE_findView: findView
            };
            engine(findView(this.viewName), data, function(err, str) {
                callback(err, str);
            });
        } catch (ex) {
            callback(ex);
        }
    }
};
