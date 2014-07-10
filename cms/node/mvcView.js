/*
* mvcView
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('./utilities'),
    engines = require('./mvcViewEngines');

var mvcView = function(viewName) {
    this.viewName = viewName;
};

mvcView.prototype = {
    
    viewName: null, engineExtname: null,

    constructor: mvcView, className: 'mvcView',

    render: function(viewContext, callback) {
        var extname = this.engineExtname;
        if (!extname) { extname = engines.default(); }
        var ctrlName = viewContext.controller.name();
        //
        var rootPath = path.join(viewContext.routeArea.viewsPath, ctrlName);
        var filePath = path.join(rootPath, this.viewName + extname);
        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
            callback(new Error('Failed to lookup view "' + this.viewName + '" in views directory "' + rootPath + '"'));
            return;
        }
        //
        var engine = engines.get(extname);
        if (engine) {
            callback(new Error('Failed to load view engine "' + this.engineExtname + '"'));
            return;
        }
        //
        try {
            var data = {
                model: viewContext.viewData,
                url: viewContext.controller.url
            };
            engine(filePath, data, function(err, str) {
                callback(err, str);
            });
        } catch (ex) {
            callback(ex);
        }
    }
};

module.exports = mvcView;
