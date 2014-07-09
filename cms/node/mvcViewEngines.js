/*
* mvcViewEngines
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var utils = require('./utilities'),
    caching = require('./caching');

var inner = caching.region('mvc-view-engines-cache');

module.exports = {

    register: function(extname, engine) {
        if (!extname) { throw new Error('Parameter "extname" is required'); }
        if (!utils.isFunction(engine)) { throw new Error('Parameter "engine" is required a function'); }
        return inner.set(extname, engine);
    },

    remove: function(extname) {
        return inner.remove(extname);
    },

    get: function(extname) {
        return inner.get(extname);
    },

    clear: function() {
        return inner.clear();
    }
};
