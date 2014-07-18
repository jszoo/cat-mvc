/*
* cachingSessionStore
* author: ronglin
* create date: 2014.6.25
*/

'use strict';

var mvcApp = require('../mvc/index');

var utils = mvcApp.utils, inner = mvcApp.caching.region('session-objects-cache');

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
            utils.defer(callback, null, sess);
        },

        set: function(sid, session, callback) {
            var expires = session.cookie.expires;
            var sess = JSON.stringify(session);
            inner.set(sid, sess, expires);
            utils.defer(callback);
        },

        destroy: function(sid, callback) {
            inner.remove(sid);
            utils.defer(callback);
        },

        clear: function (callback) {
            inner.clear();
            utils.defer(callback);
        },

        length: function(callback) {
            var len = inner.count();
            utils.defer(callback, null, len);
        }
    });

    return cachingStore;
};
