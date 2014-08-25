/*
* actionResultManager
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.25
*/

'use strict';

var utils = require('zoo-utils'),
    caching = require('zoo-cache'),
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
        if (actionResultApi.remove(name)) {
            this._inner.remove(name);
            return true;
        } else {
            return false;
        }
    },

    count: function() {
        return this._inner.count();
    },

    clear: function() {
        actionResultApi.clear();
        this._inner.clear();
        return this;
    },

    set: function(name, klass) {
        if (!utils.isString(name)) { throw new Error(utils.format('Action result name requires string type but got {0} type', utils.type(name))); }
        if (!name) { throw new Error('Action result name is required'); }
        if (this.exists(name)) { throw new Error(utils.format('Action result "{0}" already exists', name)); }
        if (!utils.isFunction(klass)) { throw new Error(utils.format('Action result "{0}" requires function type class but got {1} type', name, utils.type(klass))); }
        actionResultApi.set(name, klass);
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


var proto = mvcActionResultApi.prototype;
var nativeNames = 'httpContext,sync,callback,with,constructor,';

var actionResultApi = {
    allow: function(name) {
        return (nativeNames.indexOf(name + ',') === -1);
    },
    set: function(name, func) {
        if (!this.allow(name)) {
            throw new Error(utils.format('Action result name "{0}" is not allow', name));
        }
        proto[name] = function() {
            var result = createNew(func, arguments);
            result.httpContext = this.httpContext;
            return this.with(result);
        };
    },
    remove: function(name) {
        if (this.allow(name) && proto[name] !== undefined) {
            proto[name] = undefined;
            return true;
        } else {
            return false;
        }
    },
    clear: function() {
        utils.each(proto, function(name) {
            actionResultApi.remove(name);
        });
    }
};

var createNew = function(fn, as) {
    switch (as.length) {
        case 0: ret = fn(); break;
        case 1: ret = fn(as[0]); break;
        case 2: ret = fn(as[0], as[1]); break;
        case 3: ret = fn(as[0], as[1], as[2]); break;
        case 4: ret = fn(as[0], as[1], as[2], as[3]); break;
        case 5: ret = fn(as[0], as[1], as[2], as[3], as[4]); break;
        case 6: ret = fn(as[0], as[1], as[2], as[3], as[4], as[5]); break;
        case 7: ret = fn(as[0], as[1], as[2], as[3], as[4], as[5], as[6]); break;
        case 8: ret = fn(as[0], as[1], as[2], as[3], as[4], as[5], as[6], as[7]); break;
        case 9: ret = fn(as[0], as[1], as[2], as[3], as[4], as[5], as[6], as[7], as[8]); break;
        default: throw new Error('Maximum 9 parameters allowed'); break;
    }
    return ret;
};
