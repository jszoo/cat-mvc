/*
* mvcModels
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.31
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    events = require('events'),
    utils = require('./utilities'),
    caching = require('./caching'),
    mvcApp = require('mvcApp'),
    mvcModel = require('./mvcModel');

var registerModelAttribute = function(model) {
    var attr = mvcApp.attributes.get('(paramModelAttribute)');
    mvcApp.attributes.register(name, attr.subClass(model));
};

var mvcModels = module.exports = function(set, store) {
    utils.extend(this, set);
    if (!this.ownerAreaName) { throw new Error('Parameter "ownerAreaName" is required'); }
    //
    this.events = new events.EventEmitter();
    this._inner = caching.region('mvc-' + this.ownerAreaName + '-area-models-cache', store);
};

mvcModels.prototype = {

    ownerAreaName: null, events: null, _inner: null,

    constructor: mvcModels, className: 'mvcModels',

    register: function(name, model) {
        if (arguments.length === 1 || !model) {
            model = name;
            name = null;
        }
        if (model && model.className === 'mvcModel') {
            model.ownerAreaName = this.ownerAreaName;
            name = (name || model.name);
            //
            this._inner.set(name, model);
            registerModelAttribute(model);
        }
        this.events.emit('changed');
    },

    all: function() {
        return this._inner.all();
    },

    get: function(name) {
        return this._inner.get(name);
    },

    remove: function(name) {
        this._inner.remove(name);
        this.events.emit('changed');
    },

    clear: function() {
        this._inner.clear();
        this.events.emit('changed');
    },

    loaddir: function(modelsPath, act) {
        if (!fs.existsSync(modelsPath) || !fs.statSync(modelsPath).isDirectory()) { return; }
        var self = this, modelPaths = fs.readdirSync(modelsPath), fn = act || 'loadfile';
        utils.each(modelPaths, function(i, modelPath) {
            modelPath = path.join(modelsPath, modelPath);
            self.loaddir(modelPath, act);
            self[fn](modelPath);
        });
    },

    unloaddir: function(modelsPath) {
        this.loaddir(modelsPath, 'unloadfile');
    },

    loadfile: function(filePath) {
        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) { return; }
        var self = this, models = mvcModel.loadfile(filePath);
        utils.each(models, function() {
            if (!this.name) {
                var extName = path.extname(filePath);
                this.name = path.basename(filePath, extName);
            }
            this.path = filePath;
            self.register(this.name, this);
        });
    },

    unloadfile: function(filePath) {
        var self = this, all = this._inner.all();
        utils.each(all, function() {
            if (this.path === filePath) {
                self.remove(this.name());
            }
        });
    }
};
