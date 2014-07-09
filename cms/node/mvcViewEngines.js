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

    register: function(extname, engine) {
        if (!extname) { throw new Error('Parameter "extname" is required'); }
        if (!utils.isFunction(engine)) { throw new Error('Parameter "engine" is required a function'); }
        _default = extname;
        return _inner.set(extname, engine);
    },

    default: function(extname) {
        return (extname) ? (_default = extname) : (_default);
    },

    remove: function(extname) {
        return _inner.remove(extname);
    },

    get: function(extname) {
        return _inner.get(extname);
    },

    clear: function() {
        return _inner.clear();
    }
};
