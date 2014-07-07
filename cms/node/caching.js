/*
* caching
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var events = require('events');
var utils = require('./utilities');
var fmKey = function(key) { return utils.trim(key).toLowerCase(); };


var storage = {

    _data: {}, events: new events.EventEmitter(),

    get: function(region, key) {
        region = fmKey(region);
        key = fmKey(key);
        //
        if (arguments.length === 0) {
            return this._data;
        } else {
            var r = this._data[region];
            if (arguments.length === 1) {
                return r;
            } else {
                return r ? r[key] : r;
            }
        }
    },

    set: function(region, key, val) {
        region = fmKey(region);
        key = fmKey(key);
        //
        if (arguments.length === 2) {
            return this._data[region] = key;
        }
        if (arguments.length === 3) {
            var r = this._data[region];
            if (!r) { r = this._data[region] = {}; }
            r[key] = val;
        }
    },

    remove: function(region, key) {
        region = fmKey(region);
        key = fmKey(key);
        //
        this.events.emit('remove', { region: region, key: key });
        //
        if (arguments.length === 1) {
            return delete this._data[region];
        } else {
            var r = this._data[region];
            if (r) { return delete r[key]; }
            return false;
        }
    },

    exists: function(region, key) {
        region = fmKey(region);
        key = fmKey(key);
        //
        if (arguments.length === 1) {
            return (region in this._data);
        } else {
            var r = this._data[region];
            return (r && key in r);
        }
    },

    clear: function(region) {
        region = fmKey(region);
        //
        this.events.emit('clear', { region: region });
        //
        if (arguments.length === 0) {
            this._data = {};
            return true;
        } else {
            return delete this._data[region];
        }
    }
};


var instances = {

    _data: {},

    get: function(key) {
        return this._data[fmKey(key)];
    },

    set: function(key, ins) {
        this._data[fmKey(key)] = ins;
    }
};


var caching = function(set) {
    set = set || {};
    var region = set.region || ('guid:' + utils.unique(32));
    //
    var instance = instances.get(region);
    if (instance) { return instance; }
    instances.set(region, this);
    //
    this._region = region;
};

caching.storage = storage;

caching.instances = instances;

caching.region = function(region) {
    return new caching({ region: region });
};

caching.isRandomRegionName = function (region) {
    return /^guid:[a-z0-9]{32}$/i.test(region);
};

caching.prototype = {

    _region: null, _cachedAll: null,

    constructor: caching, className: 'caching',

    all: function(cache) {
        if (cache === true) {
            if (this._cachedAll) {
                return (this._cachedAll);
            } else {
                return (this._cachedAll = this.all());
            }
        }
        var ret = {}, self = this;
        utils.each(storage.get(this._region), function(key) {
            var val = self.get(key);
            if (val) { ret[key] = val; }
        });
        return ret;
    },

    get: function(key) {
        var o = storage.get(this._region, key);
        if (o) {
            if (utils.isDate(o.expire) && new Date() >= o.expire) {
                this.remove(key);
                return null;
            } else {
                return o.val;
            }
        }
        return undefined;
    },

    set: function(key, val, expire, notify) {
        var o = { val: val, expire: expire, notify: notify };
        storage.set(this._region, key, o);
        this._cachedAll = null;
    },

    remove: function(key) {
        var o = storage.get(this._region, key);
        if (o && utils.isFunction(o.notify)) {
            o.notify({
                value: o.val,
                action: 'remove'
            });
        }
        this._cachedAll = null;
        return storage.remove(this._region, key);
    },

    count: function() {
        return utils.propCount(this.all());
    },

    exists: function(key) {
        return storage.exists(this._region, key);
    },

    clear: function() {
        this._cachedAll = null;
        return storage.remove(this._region);
    }
};

module.exports = caching;
