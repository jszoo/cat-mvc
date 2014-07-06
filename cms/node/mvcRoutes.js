/*
* mvcRoutes
* author: ronglin
* create date: 2014.7.6
*/

'use strict';

var events = require('events'),
    utils = require('./utilities'),
    caching = require('./caching'),
    pathToRegexp = require('path-to-regexp');

var mvcRoutes = function(set) {
    utils.extend(this, set);
    if (!this.ownerAreaName) { throw new Error('ownerAreaName is required'); }
    //
    var self = this;
    this.events = new events.EventEmitter();
    this.events.on('changed', function() { self._all = null; });
    this.inner = caching.region('mvc-' + this.ownerAreaName + '-routes-cache');
};

mvcRoutes.prototype = {

    ownerAreaName: null, events: null, inner: null, _all: null,

    constructor: mvcRoutes, className: 'mvcRoutes',

    set: function(name, expression, defaultValues) {
        var values = {};
        utils.each(defaultValues, function(key, val) {
            values[key.toLowerCase()] = (val && val.toLowerCase());
        });
        //
        var keys = [], re = pathToRegexp(expression, keys, {
            sensitive: false,
            strict: false,
            end: false
        });
        //
        this.inner.set(name, {
            expression: expression,
            defaultValues: values,
            regexp: re,
            keys: keys,
            ownerAreaName: this.ownerAreaName
        });
        this.events.emit('changed');
    },

    all: function() {
        return this._all ? this._all : (this._all = this.inner.all());
    },

    get: function(name) {
        return this.inner.get(name);
    },

    remove: function(name) {
        this.inner.remove(name);
        this.events.emit('changed');
    },

    clear: function() {
        this.inner.clear();
        this.events.emit('changed');
    }
};

module.exports = mvcRoutes;
