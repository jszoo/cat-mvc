/*
* actionResultManager
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.25
*/

'use strict';

var utils = require('zoo-utils'),
    caching = require('zoo-cache'),
    mvcActionResult = require('../mvcActionResult'),
    mvcActionResultApi = require('../mvcActionResultApi');

var actionResultManager = module.exports = function(store) {
    this._inner = caching.region('mvc-action-results-cache', store);
};

actionResultManager.prototype = {

    _inner: null,

    constructor: actionResultManager,

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

    set: function(name, klass) {
        if (!utils.isString(name)) { throw new Error(utils.format('Action result name requires string type but got {0} type', utils.type(name))); }
        if (!name) { throw new Error('Action result name is required'); }
        if (this.exists(name)) { throw new Error(utils.format('Action result "{0}" already exists', name)); }
        if (!utils.isFunction(klass)) { throw new Error(utils.format('Action result "{0}" requires function type class but got {1} type', name, utils.type(klass))); }
        this._inner.set(name, klass);
        return this;
    },

    register: function(name, klass) {
        this.set(name, klass);
    },

    discover: function() {
        var self = this;
        utils.each(require('./actionResult'), function(name) { self.register(name, this); });
    }
};
