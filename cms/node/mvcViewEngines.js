/*
* mvcViewEngines
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var utils = require('./utilities'),
    caching = require('./caching'),
    inner = caching.region('mvc-view-engines-cache');

module.exports = {

    register: function(extname, callback) {
        if (!extname) { throw new Error('Parameter "extname" is required'); }
        if (!utils.isFunction(callback)) { throw new Error('Parameter "callback" is required a function'); }
        this.default(extname);
        return inner.set(extname, callback);
    },

    default: function(extname) {
        return (extname) ? inner.set('_default_extname', extname) : inner.get('_default_extname');
    },

    get: function(extname) {
        return inner.get(extname);
    },

    exists: function(extname) {
        return inner.exists(extname);
    },

    remove: function(extname) {
        return inner.remove(extname);
    },

    clear: function() {
        return inner.clear();
    }
};
