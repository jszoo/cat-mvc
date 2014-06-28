/*
* mvc
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var events = require('events'),
    areas = require('./mvcAreas'),
    utils = require('./utilities');


var mvcController = function(name, impl) {
    if (utils.isFunction(name)) { 
        this._name = null;
        this._impl = name;
    } else {
        this._name = name;
        this._impl = impl;
    }
};

mvcController.define = function(name, impl) {
    return new mvcController(name, impl);
};

mvcController.prototype = {

    _name: null, _impl: null, _path: null,

    constructor: mvcController,

    name: function(n) {
        return (n === undefined) ? (this._name) : (this._name = n);
    },

    path: function(p) {
        return (p === undefined) ? (this._path) : (this._path = p);
    },

    initialize: function(req, res) {
        var scope = new mvcControllerScope();
        this._impl.call(scope, req, res);
        return scope;
    }
};


var mvcControllerScope = function() {
    this._actions = {};
    this._events = new events.EventEmitter();
};

mvcControllerScope.prototype = {

    _actions: null, _events: null, 

    constructor: mvcControllerScope,

    on: function() {
        var args = utils.arg2arr(arguments);
        this._events.on.apply(this._events, args);
        //
        return this;
    },

    actions: function() {
        return this._actions;
    },

    action: function(name, set, impl) {
        if (!name) {
            throw new Error('action name is required.');
        }
        if (arguments.length === 2) {
            impl = set;
            set = {};
        } else if(arguments.length === 3) {
            if (utils.isString(set)) {
                set = { method: set };
            } else if (!utils.isObject(set)) {
                set = {};
            }
        }
        if (!utils.isFunction(impl)) {
            throw new Error('action impl is required.');
        }
        //
        var act = this._actions[name];
        if (!act) { act = this._actions[name] = {}; }
        act.name = name;
        act.impl = impl;
        act.method = set.method;
        //act.filters = set.filters;
        //
        return this;
    }
};


var mvcHandler = function(set) {

    var parse = require('url').parse;
    var macher = require('path-match')({
        sensitive: false,
        strict: false,
        end: false
    });

    //
    return function(req, res, next) {
        var allAreas = areas.all(), matched = false;
        utils.each(allAreas, function(i, area) {
            var match = macher(area.route);
            var params = match(parse(req.url).pathname);
            if (params !== false) {
                utils.each(params, function(key, val) {
                    params[key] = val.toLowerCase();
                });
                var ctrl = area.controllers[params.controller];
                if (ctrl) {
                    var scope = ctrl.initialize(req, res);
                    var actions = scope.actions();
                    var act = actions[params.action];
                    debugger;
                }
            }
        });
        if (!matched) {
            next();
        }
    };
};


module.exports = {
    areas: areas,
    handler: mvcHandler,
    controller: mvcController.define,
    controllerScope: mvcControllerScope
};
