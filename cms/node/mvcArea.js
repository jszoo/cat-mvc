/*
* mvcArea
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    events = require('events'),
    utils = require('./utilities');


var mvcArea = function(set) {
    utils.extend(this, set);
    this.controllers = {};
    this.extensions = {};
    this.routes = {};
    this.events = new events.EventEmitter();
};

mvcArea.isArea = true;

mvcArea.prototype = {

    name: null, path: null,

    controllers: null, routes: null, extensions: null,

    constructor: mvcArea, events: null,

    mapRoute: function(routeExp, defaultValues) {
        var values = {};
        utils.each(defaultValues, function(key, val) {
            values[key.toLowerCase()] = (val && val.toLowerCase());
        });
        this.routes[routeExp.toLowerCase()] = {
            expression: routeExp,
            defaultValues: values
        };
        this.events.emit('routeChanged');
        return this;
    },

    removeRoute: function(routeExp) {
        var ret = (delete this.routes[routeExp.toLowerCase()]);
        if (ret) { this.events.emit('routeChanged'); }
        return this;
    },

    clearRoutes: function() {
        if (utils.propCount(this.routes) > 0) {
            this.events.emit('routeChanged');
        }
        return (this.routes = {}, this);
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
        return this;
    },

    unloadController: function(filePath) {
        var extName = path.extname(filePath);
        var ctrlName = path.basename(filePath, extName);
        return (delete this.controllers[ctrlName.toLowerCase()], this);
    },

    findController: function(name) {
        return this.controllers[name];
    },

    clearControllers: function() {
        return (this.controllers = {}, this);
    },

    loadExtension: function(filePath) {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            this.extensions[filePath.toLowerCase()] = require(filePath);
        }
        return this;
    },

    unloadExtension: function(filePath) {
        return (delete this.extensions[filePath.toLowerCase()], this);
    },

    clearExtensions: function() {
        return (this.extensions = {}, this);
    },

    fireExtension: function(funcName) {
        var self = this;
        utils.each(this.extensions, function(k, ext) {
            if (ext && utils.isFunction(ext[funcName])) {
                ext[funcName](self);
            }
        });
        return this;
    }
};

module.exports = mvcArea;
