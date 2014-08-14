/*
* mvcRoutes
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.6
*/

'use strict';

var events = require('events'),
    utils = require('zoo-utils'),
    caching = require('zoo-cache'),
    mvcRoute = require('./mvcRoute');

var mvcRoutes = module.exports = function(set, store) {
    utils.extend(this, set);
    if (!this.ownerAreaName) { throw new Error('Parameter "ownerAreaName" is required'); }
    this._inner = caching.region('mvc-' + this.ownerAreaName + '-area-routes-cache', store);
    mvcRoutes.superclass.constructor.call(this);
};

utils.inherit(mvcRoutes, events.EventEmitter, {

    ownerAreaName: null, _inner: null,

    set: function(name, expression, defaultValues) {
        if (!name) { throw new Error('Route name is required'); }
        this._inner.set(name, new mvcRoute({
            name: name,
            expression: expression,
            defaultValues: defaultValues,
            ownerAreaName: this.ownerAreaName
        }));
        this.emit('changed');
    },

    all: function() {
        return this._inner.all();
    },

    get: function(name) {
        return this._inner.get(name);
    },

    exists: function(name) {
        return this._inner.exists(name);
    },

    remove: function(name) {
        this._inner.remove(name);
        this.emit('changed');
    },

    count: function() {
        return this._inner.count();
    },

    clear: function() {
        this._inner.clear();
        this.emit('changed');
    }
});
