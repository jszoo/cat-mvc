/*
* mvcModels
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.31
*/

'use strict';

var events = require('events'),
    utils = require('./utilities'),
    caching = require('./caching'),
    mvcModel = require('./mvcModel');

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
        if (!name) { throw new Error('Parameter "name" is required'); }
        this._inner.set(name, new mvcModel({
            name: name,
            model: model,
            ownerAreaName: this.ownerAreaName
        }));
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
        var self = this, modelFiles = fs.readdirSync(modelsPath), fn = act || 'loadfile';
        utils.each(modelFiles, function(i, modelFileName) {
            self[fn](path.join(modelsPath, modelFileName));
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
