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
        var ret = this._inner.remove(name);
        this.emit('changed');
        return ret;
    },

    count: function() {
        return this._inner.count();
    },

    clear: function() {
        this._inner.clear();
        this.emit('changed');
        return this;
    },

    set: function(name, route) {
        if (route === undefined) {
            route = name;
            name = null;
        }
        //
        if (!(route instanceof mvcRoute)) {
            throw new Error('The specified route is invalid type');
        }
        //
        name = (name || route.name);
        //
        if (!utils.isString(name)) { throw new Error(utils.format('Route name requires string type but got {0} type', utils.type(name))); }
        if (!name) { throw new Error('Route name is required'); }
        if (this.exists(name)) { throw new Error(utils.format('Route "{0}" under area "{1}" is duplicated', name, this.ownerAreaName)); }
        //
        route.name = name;
        route.ownerAreaName = this.ownerAreaName;
        this._inner.set(name, route);
        this.emit('changed');
        return this;
    },

    register: function(name, expression, defaultValues) {
        this.set(new mvcRoute({
            name: name,
            expression: expression,
            defaultValues: defaultValues
        }));
    }
});
