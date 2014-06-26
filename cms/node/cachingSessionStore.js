/*
* cachingSessionStore
* author: ronglin
* create date: 2014.6.25
*/

'use strict';

var caching = require('./caching'),
    utils = require('./utilities'),
    inner = caching.region('session-objects-cache');

var defer = (typeof setImmediate === 'function') ? setImmediate : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)); };

module.exports = function(session) {

    var Store = session.Store;

    var cachingStore = function(options) {
        options = options || {};
        Store.call(this, options);
    };

    utils.extend(cachingStore.prototype, {

        __proto__: Store.prototype,

        constructor: cachingStore,

        get: function(sid, callback) {
            var sess = inner.get(sid);
            if (sess) { sess = JSON.parse(sess); }
            defer(callback, null, sess);
        },

        set: function(sid, session, callback) {
            var expires = session.cookie.expires;
            var sess = JSON.stringify(session);
            inner.set(sid, sess, expires);
            defer(callback);
        },

        destroy: function(sid, callback) {
            inner.remove(sid);
            defer(callback);
        },

        clear: function (callback) {
            inner.clear();
            defer(callback);
        },

        length: function(callback) {
            var len = inner.count();
            defer(callback, null, len);
        }
    });

    return cachingStore;
};
