/*
* mvcAreaEvents
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.8
*/

'use strict';
var fs = require('fs'),
    utils = require('./utilities'),
    caching = require('./caching');

var mvcAreaEvents = module.exports = function(set, store) {
    utils.extend(this, set);
    if (!this.ownerAreaName) { throw new Error('Parameter "ownerAreaName" is required'); }
    this._inner = caching.region('mvc-' + this.ownerAreaName + '-area-events-cache', store);
};

mvcAreaEvents.prototype = {

    ownerAreaName: null, _inner: null,

    constructor: mvcAreaEvents, className: 'mvcAreaEvents',

    all: function() {
        return this._inner.all();
    },

    clear: function() {
        this._inner.clear();
    },

    register: function(name, obj) {
        this._inner.set(name, obj);
    },

    remove: function(name) {
        return this._inner.remove(filePath);
    },

    load: function(filePath) {
        if (!fs.existsSync(filePath)) { return; }
        if (!fs.statSync(filePath).isFile()) { return; }
        var obj = require(filePath);
        this.register(filePath, utils.isFunction(obj) ? obj() : obj);
    },

    unload: function(filePath) {
        this.remove(filePath);
    }
};
