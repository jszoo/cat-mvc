/*
* caching
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var utils = require('./utilities'),
    cachingStore = require('./cachingStore');

var instances, store;

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

caching.region = function(region) {
    return new caching({ region: region });
};

caching.isRandomRegionName = function (region) {
    return /^guid:[a-z0-9]{32}$/i.test(region);
};

caching.setStore = function(sto) {
    store = caching.store = sto;
};

// init
caching.setStore(new cachingStore());
instances = caching.region('caching-instances');
// end

caching.prototype = {

    region: null, _cachedAll: null, _hasExpireItem: false,

    constructor: caching, className: 'caching',

    all: function() {
        if (!this._hasExpireItem && this._cachedAll) {
            return this._cachedAll;
        }
        var ret = {}, self = this;
        utils.each(store.get(this.region), function(key) {
            var val = self.get(key);
            if (val) { ret[key] = val; }
        });
        if (!this._hasExpireItem) {
            this._cachedAll = ret;
        }
        return ret;
    },

    get: function(key) {
        var o = store.get(this.region, key);
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
        store.set(this.region, key, o);
        this._hasExpireItem = (this._hasExpireItem || !!expire);
        this._cachedAll = null;
    },

    remove: function(key) {
        var o = store.get(this.region, key);
        if (o && utils.isFunction(o.notify)) {
            o.notify({
                value: o.val,
                action: 'remove'
            });
        }
        this._cachedAll = null;
        return store.remove(this.region, key);
    },

    count: function() {
        return utils.propCount(this.all());
    },

    exists: function(key) {
        return store.exists(this.region, key);
    },

    clear: function() {
        this._cachedAll = null;
        return store.remove(this.region);
    }
};
