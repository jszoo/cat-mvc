/*
* mvcViewEngines
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var utils = require('./utilities'),
    caching = require('./caching');

var _inner = caching.region('mvc-view-engines-cache');
var _default = null;

module.exports = {

    register: function(extname, callback) {
        if (!extname) { throw new Error('Parameter "extname" is required'); }
        if (!utils.isFunction(callback)) { throw new Error('Parameter "callback" is required a function'); }
        _default = extname;
        return _inner.set(extname, callback);
    },

    default: function(extname) {
        return (extname) ? (_default = extname) : (_default);
    },

    get: function(extname) {
        return _inner.get(extname);
    },

    exists: function(extname) {
        return _inner.exists(extname);
    },

    remove: function(extname) {
        return _inner.remove(extname);
    },

    clear: function() {
        return _inner.clear();
    }
};
