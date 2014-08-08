/*
* ejsViewEngine
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.24
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('zoo-utils'),
    ejsView = require('./ejsView');

var ejsViewEngine = module.exports = function(set) {
    utils.extend(this, set);
};

ejsViewEngine.prototype = {

    extname: '.ejs',

    constructor: ejsViewEngine,

    findView: function(controllerContext, viewName, callback) {
        callback = utils.deferProxy(callback);
        var self = this, index = 0, searchedLocations = [];
        var tryDirs = controllerContext.viewTryDirs();
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
            if (index >= tryDirs.length) {
                done();
                return;
            }
            var file = path.join(tryDirs[index++], viewName + self.extname);
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
