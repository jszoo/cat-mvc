/*
* caching
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.24
*/

'use strict';

var utils = require('./utilities'),
    cachingStore = require('./cachingStore');

var instances, defaultStore;

var caching = module.exports = function(set) {
    utils.extend(this, set);
    if (!this.region) {
        this.region = ('guid:' + utils.unique(32));
    }
    if (instances) {
        var instance = instances.get(this.region);
        if (instance) { return instance; }
        instances.set(this.region, this);
    }
};

caching.region = function(region, store) {
    return new caching({
        region: region,
        store: store
    });
};

caching.isRandomRegionName = function(region) {
    return /^guid:[a-z0-9]{32}$/i.test(region);
};

caching.defaultStore = function(sto) {
    return (sto === undefined) ? (defaultStore) : (defaultStore = sto);
};

caching.prototype = {

    region: null, store: null, _cachedAll: null, _hasExpireItem: false,

    constructor: caching, className: 'caching',

    sto: function(o) {
        return (o === undefined) ? (this.store || defaultStore) : (this.store = o, this);
    },

    all: function() {
        if (!this._hasExpireItem && this._cachedAll) {
            return this._cachedAll;
        }
        var ret = {}, self = this;
        utils.each(this.sto().get(this.region), function(key) {
            var val = self.get(key);
            if (val) { ret[key] = val; }
        });
        if (!this._hasExpireItem) {
            this._cachedAll = ret;
        }
        return ret;
    },

    get: function(key) {
        var o = this.sto().get(this.region, key);
        if (o instanceof cachingItem) {
            if (o.isExpired()) {
                return (this.remove(key), null);
            } else {
                return o.getValue();
            }
        }
        return o;
    },

    set: function(key, val, expire, notify) {
        var o = (expire || notify) ? new cachingItem(val, expire, notify) : val;
        this.sto().set(this.region, key, o);
        this._hasExpireItem = (this._hasExpireItem || !!expire);
        this._cachedAll = null;
    },

    remove: function(key) {
        var o = this.sto().get(this.region, key);
        if (o instanceof cachingItem) {
            o.doNotify('remove');
        }
        this._cachedAll = null;
        return this.sto().remove(this.region, key);
    },

    count: function() {
        return utils.propCount(this.all());
    },

    exists: function(key) {
        return this.sto().exists(this.region, key);
    },

    clear: function() {
        this._cachedAll = null;
        return this.sto().remove(this.region);
    }
};

var cachingItem = function(value, expire, notify) {
    this._value = value;
    this._expire = expire;
    this._notify = notify;
};

cachingItem.prototype = {

    _value: null, _expire: null, _notify: null,

    constructor: cachingItem, className: 'cachingItem',

    getValue: function () {
        return this._value;
    },

    isExpired: function() {
        return (utils.isDate(this._expire) && new Date() >= this._expire);
    },

    doNotify: function(action) {
        if (utils.isFunction(this._notify)) {
            this._notify({
                value: this._value,
                action: action
            });
        }
    }
};

// init
caching.defaultStore(new cachingStore());
instances = caching.region('caching-instances');
// end
