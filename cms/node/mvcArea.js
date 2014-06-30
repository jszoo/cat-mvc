/*
* mvcArea
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('./utilities');


var mvcArea = function(set) {
    utils.extend(this, set);
    this.controllers = {};
    this.extensions = {};
    this.routes = {};
};

mvcArea.isArea = true;

mvcArea.prototype = {

    name: null, path: null,

    controllers: null, routes: null, extensions:null,

    constructor: mvcArea,

    mapRoute: function(routeExp, defaultRoute) {
        var values = utils.isObject(defaultRoute) ? defaultRoute : {};
        this.routes[routeExp.toLowerCase()] = {
            expression: routeExp,
            defaultRoute: values
        };
    },

    removeRoute: function(routeExp) {
        return (delete this.routes[routeExp.toLowerCase()]);
    },

    clearRoutes: function() {
        this.routes = {};
    },

    loadController: function(filePath) {
        if (fs.statSync(filePath).isFile()) {
            var self = this, coreLoad = function(ctrl) {
                if (ctrl && ctrl.__proto__.constructor.isController === true) {
                    if (!ctrl.name()) {
                        var extName = path.extname(filePath);
                        ctrl.name(path.basename(filePath, extName));
                    }
                    ctrl.path(filePath);
                    self.controllers[ctrl.name().toLowerCase()] = ctrl;
                    return true;
                }
            };
            var module = require(filePath);
            if (module && coreLoad(module) !== true) {
                utils.each(module, function() {
                    coreLoad(this);
                });
            }
        }
    },

    unloadController: function(filePath) {
        var extName = path.extname(filePath);
        var ctrlName = path.basename(filePath, extName);
        return (delete this.controllers[ctrlName.toLowerCase()]);
    },

    clearControllers: function() {
        this.controllers = {};
    },

    loadExtension: function(filePath) {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            this.extensions[filePath.toLowerCase()] = require(filePath);
        }
    },

    unloadExtension: function(filePath) {
        return (delete this.extensions[filePath.toLowerCase()]);
    },

    clearExtensions: function() {
        this.extensions = {};
    },

    fireExtension: function(funcName) {
        var self = this;
        utils.each(this.extensions, function(k, ext) {
            if (ext && utils.isFunction(ext[funcName])) {
                ext[funcName](self);
            }
        });
    }
};

module.exports = mvcArea;
