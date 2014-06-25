/*
* session store
* author: ronglin
* create date: 2014.6.25
*/

'use strict';

var cache = require('./cache'),
    utils = require('./utilities'),
    inner = cache.region('session-store-cache');


module.exports = function(session) {

    var Store = session.Store;

    var cacheStore = function(options) {
        options = options || {};
        Store.call(this, options);
    };

    cacheStore.prototype.__proto__ = Store.prototype;

    utils.extend(cacheStore.prototype, {
        get: function(sid, callback) {
            var o = inner.get(sid);
            if (!o) { o = inner.set(sid, {}); }
            callback(null, o);
        },
        set: function(sid, session, callback) {
            var maxAge = session.cookie.originalMaxAge, expire;
            if (maxAge) {
                expire = new Date();
                expire.setMilliseconds(expire.getMilliseconds() + maxAge);
            }
            callback(null, inner.set(sid, session, expire));
        },
        destroy: function(sid, callback) {
            callback(null, inner.remove(sid));
        },
        clear: function (callback) {
            callback(null, inner.clear());
        },
        length: function(callback) {
            callback(null, inner.count());
        }
    });

    return cacheStore;
};
