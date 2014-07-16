/*
* mvcAreaSubs
* author: ronglin
* create date: 2014.7.8
*/

'use strict';
var fs = require('fs'),
    utils = require('./utilities'),
    caching = require('./caching');

var mvcAreaSubs = module.exports = function(set) {
    utils.extend(this, set);
    if (!this.ownerAreaName) { throw new Error('Parameter "ownerAreaName" is required'); }
    this._inner = caching.region('mvc-' + this.ownerAreaName + '-subscribes-cache');
};

mvcAreaSubs.prototype = {

    ownerAreaName: null, _inner: null,

    constructor: mvcAreaSubs, className: 'mvcAreaSubs',

    all: function() {
        return this._inner.all();
    },

    get: function(name) {
        return this._inner.get(name);
    },

    set: function(name, obj) {
        this._inner.set(name, obj);
    },

    clear: function() {
        this._inner.clear();
    },

    load: function(filePath) {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            this._inner.set(filePath, require(filePath));
        }
    },

    unload: function(filePath) {
        return this._inner.remove(filePath);
    }
};
