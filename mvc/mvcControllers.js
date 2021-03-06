/*
* mvcControllers
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.7
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('zoo-utils'),
    caching = require('zoo-cache'),
    mvcController = require('./mvcController');

var mvcControllers = module.exports = function(set, store) {
    utils.extend(this, set);
    if (!this.ownerAreaName) { throw new Error('Parameter "ownerAreaName" is required'); }
    this._inner = caching.region('mvc-' + this.ownerAreaName + '-area-controllers-cache', store);
};

mvcControllers.prototype = {

    ownerAreaName: null, _inner: null,

    constructor: mvcControllers,

    all: function() {
        return this._inner.all();
    },

    get: function(name) {
        return this._inner.get(name);
    },

    exists: function(name) {
        return this._inner.exists(name);
    },

    remove: function(name) {
        return this._inner.remove(name);
    },

    count: function() {
        return this._inner.count();
    },

    clear: function() {
        this._inner.clear();
        return this;
    },

    set: function(name, controller) {
        if (controller === undefined) {
            controller = name;
            name = null;
        }
        //
        if (!controller) { throw new Error('Controller object is required'); }
        if (!(controller instanceof mvcController)) { throw new Error('The specified controller is invalid type'); }
        //
        name = (name || controller.name());
        if (/.+Controller$/i.test(name)) {
            var len = 'Controller'.length;
            name = name.substr(0, name.length - len);
        }
        //
        if (!utils.isString(name)) { throw new Error(utils.format('Controller name requires string type but got {0} type', utils.type(name))); }
        if (!name) { throw new Error('Controller name is required'); }
        if (!/^[0-9a-zA-Z_-]+$/.test(name)) { throw new Error(utils.format('Controller name "{0}" is invalid', name)); }
        if (this.exists(name)) { throw new Error(utils.format('Controller "{0}" under area "{1}" is duplicated', name, this.ownerAreaName)); }
        //
        controller.name(name);
        this._inner.set(name, controller);
        return this;
    },

    register: function(name, attr, impl) {
        this.set(mvcController.api(name, attr, impl));
    },

    loaddir: function(ctrlsPath, act) {
        if (!fs.existsSync(ctrlsPath) || !fs.statSync(ctrlsPath).isDirectory()) { return; }
        var self = this, ctrlItems = fs.readdirSync(ctrlsPath), fn = act || 'loadfile';
        utils.each(ctrlItems, function(i, ctrlItem) {
            if (ctrlItem.indexOf('.') === 0) { return; }
            var ctrlPath = path.join(ctrlsPath, ctrlItem);
            self.loaddir(ctrlPath, act);
            self[fn](ctrlPath);
        });
    },

    unloaddir: function(ctrlsPath) {
        this.loaddir(ctrlsPath, 'unloadfile');
    },

    loadfile: function(filePath) {
        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) { return; }
        var self = this, ctrls = mvcController.loadfile(filePath);
        utils.each(ctrls, function() {
            if (!this.name()) {
                var extName = path.extname(filePath);
                this.name(path.basename(filePath, extName));
            }
            this.path(filePath);
            self.set(this.name(), this);
        });
    },

    unloadfile: function(filePath) {
        var self = this, all = this._inner.all();
        utils.each(all, function() {
            if (this.path() === filePath) {
                self.remove(this.name());
            }
        });
    }
};
