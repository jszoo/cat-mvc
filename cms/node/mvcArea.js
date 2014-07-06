/*
* mvcArea
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('./utilities'),
    mvcRoutes = require('./mvcRoutes');


var mvcArea = function(set) {
    utils.extend(this, set);
    if (!this.name) { throw new Error('name is required'); }
    //
    this.controllers = {};
    this.extensions = {};
    this.routes = new mvcRoutes({ ownerAreaName: this.name });
};

mvcArea.isArea = true;

mvcArea.prototype = {

    name: null, path: null,

    controllers: null, routes: null, extensions: null,

    constructor: mvcArea, className: 'mvcArea',

    registerController: function(controllerName, controller) {
        if (arguments.length === 1) {
            controller = controllerName;
            controllerName = null;
        }
        if (controller && controller.className === 'mvcController') {
            controllerName = controllerName || controller.name();
            this.controllers[controllerName.toLowerCase()] = controller;
        }
    },

    removeController: function(controllerName) {
        controllerName = (controllerName || '');
        return (delete this.controllers[controllerName.toLowerCase()]);
    },

    findController: function(controllerName) {
        controllerName = (controllerName || '');
        return (this.controllers[controllerName.toLowerCase()]);
    },

    clearControllers: function() {
        return (this.controllers = {}, this);
    },

    loadController: function(filePath) {
        if (!fs.statSync(filePath).isFile()) { return; }
        var self = this, load = function(ctrl) {
            if (ctrl && ctrl.className === 'mvcController') {
                if (!ctrl.name()) {
                    var extName = path.extname(filePath);
                    ctrl.name(path.basename(filePath, extName));
                }
                ctrl.path(filePath);
                self.registerController(ctrl.name(), ctrl);
                return true;
            }
        };
        var module = require(filePath);
        if (module && load(module) !== true) {
            utils.each(module, function() {
                load(this);
            });
        }
    },

    unloadController: function(filePath) {
        if (!fs.statSync(filePath).isFile()) { return; }
        var self = this, unload = function(ctrl) {
            if (ctrl && ctrl.className === 'mvcController') {
                var ctrlName = ctrl.name();
                if (!ctrlName) {
                    var extName = path.extname(filePath);
                    ctrlName = path.basename(filePath, extName);
                }
                self.removeController(ctrlName);
                return true;
            }
        };
        var module = require(filePath);
        if (module && unload(module) !== true) {
            utils.each(module, function() {
                unload(this);
            });
        }
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
