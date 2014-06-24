/*
* cache
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var utils = require('./utilities');
var fmKey = function(key) { return utils.trim(key).toLowerCase(); };


var global = {

    _data: {}, _notify: [],

    get: function(key) {
        return this._data[fmKey(key)];
    },

    set: function(key, val) {
        return this._data[fmKey(key)] = val;
    },

    remove: function(key) {
        utils.each(this._notify, function() {
            this.func({ action: 'remove', key: key });
        });
        return (delete this._data[fmKey(key)]);
    },

    exists: function(key) {
        return (fmKey(key) in this._data);
    },

    clear: function() {
        this._data = {};
        utils.each(this._notify, function() {
            this.func({ action: 'clear' });
        });
    },

    subscribe: function(func) {
        if (utils.isFunction(func)) {
            this._notify.push({ func: func });
        }
    }
};


var instances = {

    _data: {},

    get: function(key) {
        return this._data[fmKey(key)];
    },

    set: function(key, val) {
        this._data[fmKey(key)] = val;
    }
};


var cache = function(set) {
    set = set || {};
    var region = set.region || utils.guid();
    //
    var instance = instances.get(region);
    if (instance) { return instance; }
    instances.set(region, this);
    //
    this._region = region;
    global.set(region, {});
};

cache.global = global;

cache.instances = instances;

cache.region = function(region) {
    return new cache({ region: region });
};

cache.prototype = {

    _region: null,

    constructor: cache,

    get: function(key) {
        var g = global.get(this._region);
        var c = g ? g[fmKey(key)] : null;
        if (c) {
            if (utils.isDate(c.expire) && c.expire > new Date()) {
                this.remove(key);
                return null;
            } else {
                return c.val;
            }
        }
        return null;
    },

    set: function(key, val, expire, notify) {
        var g = global.get(this._region);
        if (!g) { g = global.set(this._region, {}); }
        g[fmKey(key)] = { val: val, expire: expire, notify: notify };
    },

    remove: function(key) {
        var g = global.get(this._region);
        if (g) {
            var k = fmKey(key), c = g[k];
            if (utils.isFunction(c.notify)) { 
                c.notify({
                    value: c.val,
                    action: 'remove'
                });
            }
            return (delete g[k]);
        }
        return false;
    },

    exists: function(key) {
        var g = global.get(this._region);
        if (g) { return (fmKey(key) in g); }
        else { return false; }
    },

    clear: function() {
        return global.remove(this._region);
    }
};

module.exports = cache;
