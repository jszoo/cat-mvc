/*
* mvcAreaRoutes
* author: ruleechen 
* contact: rulee@live.cn
* create date: 2014.7.6
*/

'use strict';

var events = require('events'),
    utils = require('./utilities'),
    caching = require('./caching'),
    mvcAreaRoute = require('./mvcAreaRoute');

var mvcAreaRoutes = module.exports = function(set, store) {
    utils.extend(this, set);
    if (!this.ownerAreaName) { throw new Error('Parameter "ownerAreaName" is required'); }
    //
    this.events = new events.EventEmitter();
    this._inner = caching.region('mvc-' + this.ownerAreaName + '-area-routes-cache', store);
};

mvcAreaRoutes.prototype = {

    ownerAreaName: null, events: null, _inner: null,

    constructor: mvcAreaRoutes, className: 'mvcAreaRoutes',

    set: function(name, expression, defaultValues) {
        if (!name) { throw new Error('Parameter "name" is required'); }
        this._inner.set(name, new mvcAreaRoute({
            name: name,
            expression: expression,
            defaultValues: defaultValues,
            ownerAreaName: this.ownerAreaName
        }));
        this.events.emit('changed');
    },

    all: function() {
        return this._inner.all();
    },

    get: function(name) {
        return this._inner.get(name);
    },

    remove: function(name) {
        this._inner.remove(name);
        this.events.emit('changed');
    },

    clear: function() {
        this._inner.clear();
        this.events.emit('changed');
    }
};
