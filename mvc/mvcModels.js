/*
* mvcModels
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.31
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('zoo-utils'),
    caching = require('zoo-cache'),
    mvcModel = require('./mvcModel'),
    mvcModelBinder = require('./mvcModelBinder'),
    mvcModelBinderAttribute = require('./mvcModelBinderAttribute');

var modelAttributes = {
    mvc: function() {
        return (this._mvc ? this._mvc : (this._mvc = require('./mvcApp')));
    },
    del: function(attrName, category) {
        this.mvc().attributes.remove(attrName, category);
    },
    set: function(attrName, model, category) {
        var binder = new mvcModelBinder(model);
        var binderAttribute = mvcModelBinderAttribute.subClass(binder);
        this.mvc().attributes.register(attrName, binderAttribute, category);
    }
};

var mvcModels = module.exports = function(set, store) {
    utils.extend(this, set);
    if (!this.ownerAreaName) { throw new Error('Parameter "ownerAreaName" is required'); }
    this._inner = caching.region('mvc-' + this.ownerAreaName + '-area-models-cache', store);
};

mvcModels.prototype = {

    ownerAreaName: null, _inner: null,

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
            modelAttributes.set(name, model, this.ownerAreaName);
        }
    },

    all: function() {
        return this._inner.all();
    },

    get: function(name) {
        return this._inner.get(name);
    },

    remove: function(name) {
        this._inner.remove(name);
        modelAttributes.del(name, this.ownerAreaName);
    },

    clear: function() {
        this._inner.clear();
    },

    loaddir: function(modelsPath, act) {
        if (!fs.existsSync(modelsPath) || !fs.statSync(modelsPath).isDirectory()) { return; }
        var self = this, modelItems = fs.readdirSync(modelsPath), fn = act || 'loadfile';
        utils.each(modelItems, function(i, modelItem) {
            if (modelItem.indexOf('.') === 0) { return; }
            var modelPath = path.join(modelsPath, modelItem);
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
                self.remove(this.name);
            }
        });
    }
};
