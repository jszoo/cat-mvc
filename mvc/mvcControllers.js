/*
* mvcControllers
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.7
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('./utilities'),
    caching = require('./caching'),
    mvcController = require('./mvcController');

var mvcControllers = module.exports = function(set, store) {
    utils.extend(this, set);
    if (!this.ownerAreaName) { throw new Error('Parameter "ownerAreaName" is required'); }
    this._inner = caching.region('mvc-' + this.ownerAreaName + '-area-controllers-cache', store);
};

mvcControllers.prototype = {

    ownerAreaName: null, _inner: null,

    constructor: mvcControllers, className: 'mvcControllers',

    register: function(name, controller) {
        if (arguments.length === 1 || !controller) {
            controller = name;
            name = null;
        }
        if (controller && controller.className === 'mvcController') {
            name = (name || controller.name());
            this._inner.set(name, controller);
        }
    },

    remove: function(name) {
        return this._inner.remove(name);
    },

    get: function(name) {
        return this._inner.get(name);
    },

    clear: function() {
        return this._inner.clear();
    },

    loaddir: function(ctrlsPath, act) {
        if (!fs.existsSync(ctrlsPath) || !fs.statSync(ctrlsPath).isDirectory()) { return; }
        var self = this, ctrlFiles = fs.readdirSync(ctrlsPath), fn = act || 'loadfile';
        utils.each(ctrlFiles, function(i, ctrlFileName) {
            self[fn](path.join(ctrlsPath, ctrlFileName));
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
            self.register(this.name(), this);
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
