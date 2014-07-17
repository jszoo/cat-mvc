/*
* mvcViewEngines
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var utils = require('./utilities'),
    caching = require('./caching');

var mvcViewEngines = module.exports = function() {
    this._inner = caching.region('mvc-view-engines-cache');
};

mvcViewEngines.prototype = {

    _inner: null,

    constructor: mvcViewEngines, className: 'mvcViewEngines',

    register: function(extname, callback) {
        if (!extname) { throw new Error('Parameter "extname" is required'); }
        if (!utils.isFunction(callback)) { throw new Error('Parameter "callback" is required a function'); }
        this.default(extname);
        return this._inner.set(extname, callback);
    },

    default: function(extname) {
        return (extname) ? this._inner.set('_default_extname', extname) : this._inner.get('_default_extname');
    },

    get: function(extname) {
        return this._inner.get(extname);
    },

    exists: function(extname) {
        return this._inner.exists(extname);
    },

    remove: function(extname) {
        return this._inner.remove(extname);
    },

    clear: function() {
        return this._inner.clear();
    }
};
