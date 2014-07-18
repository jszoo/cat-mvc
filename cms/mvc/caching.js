/*
* caching
* author: ronglin
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

caching.isRandomRegionName = function (region) {
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
        this.sto().set(this.region, key, o);
        this._hasExpireItem = (this._hasExpireItem || !!expire);
        this._cachedAll = null;
    },

    remove: function(key) {
        var o = this.sto().get(this.region, key);
        if (o && utils.isFunction(o.notify)) {
            o.notify({
                value: o.val,
                action: 'remove'
            });
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

// init
caching.defaultStore(new cachingStore());
instances = caching.region('caching-instances');
// end
