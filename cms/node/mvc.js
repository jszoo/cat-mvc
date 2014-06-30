/*
* mvc
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var events = require('events'),
    areas = require('./mvcAreas'),
    inject = require('./mvcInject'),
    utils = require('./utilities');


var mvcController = function(set) {
    utils.extend(this, set);
    this._actions = {};
    this._events = new events.EventEmitter();
};

mvcController.define = function(name, impl) {
    if (utils.isFunction(name)) {
        impl = name;
        name = null;
    }
    return new mvcController({
        _name: name,
        _impl: impl
    });
};

mvcController.isController = true;
mvcController.prototype = {

    _name: null, _impl: null, _path: null,

    _actions: null, _events: null,

    constructor: mvcController,

    name: function(p) { return (p === undefined) ? (this._name) : (this._name = p, this); },
    path: function(p) { return (p === undefined) ? (this._path) : (this._path = p, this); },
    impl: function(p) { return (p === undefined) ? (this._impl) : (this._impl = p, this); },
    actions: function() { return this._actions; },
    events: function() { return this._events; },

    initialize: function(req, res) {
        var injectedParams = this.injectImpl(req, res);
        this.impl().apply(this, injectedParams);
        return this;
    },

    injectImpl: function(req, res) {
        var params = [], self = this, actionWrap;
        var paramNames = inject.annotate(this.impl());
        utils.each(paramNames, function(i, name) {
            var loweName = name.toLowerCase();
            if (loweName.charAt(0) === '$') {
                loweName = loweName.substr(1);
            }
            switch(loweName) {
                case 'req': params.push(req); break;
                case 'res': params.push(res); break;
                case 'request': params.push(req); break;
                case 'response': params.push(res); break;
                case 'controller': params.push(self); break;
                case 'events': params.push(self._events); break;
                case 'action': params.push(actionWrap || (actionWrap = function() { 
                    var args = utils.arg2arr(arguments);
                    self.action.apply(self, args);
                    return actionWrap;
                })); break;
            }
        });
        return params;
    },

    on: function() {
        var args = utils.arg2arr(arguments);
        this._events.on.apply(this._events, args);
        return this;
    },

    action: function(name, sett, impl) {
        if (!name) {
            throw new Error('action name is required.');
        }
        if (arguments.length === 2) {
            impl = sett;
            sett = {};
        } else if(arguments.length === 3) {
            if (utils.isString(sett)) {
                sett = { method: sett };
            } else if (!utils.isObject(sett)) {
                sett = {};
            }
        }
        if (!utils.isFunction(impl)) {
            throw new Error('action impl is required.');
        }
        // new
        this._actions[name.toLowerCase()] = new mvcAction({
            ctrl: this,
            name: name,
            impl: impl,
            sett: sett
        });
        // ret
        return this;
    }
};


var mvcAction = function(set) {
    utils.extend(this, set);
};

mvcAction.isAction = true;
mvcAction.prototype = {

    ctrl: null, name: null, impl: null, sett: null,
    
    constructor: mvcAction,

    injectImpl: function(req) {
        var params = [];
        var paramNames = inject.annotate(this.impl);
        utils.each(paramNames, function(i, name) {
            //TODO:
        });
        return params;
    },

    execute: function(req, res) {
        if (utils.isFunction(this.impl)) {
            var injectedParams = this.injectImpl(req);
            this.ctrl.events().emit('actionExecuting', this);
            this.impl.apply(this.ctrl, injectedParams);
            this.ctrl.events().emit('actionExecuted', this);
        }
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
        var pathname = parse(req.url).pathname;
        var allAreas = areas.all(), matched = false;
        utils.each(allAreas, function(i, area) {
            utils.each(area.routes, function(k, route) {
                var match = macher(route.expression);
                var params = match(pathname);
                if (params !== false) {
                    utils.each(params, function(key, val) {
                        params[key] = val.toLowerCase();
                    });
                    var ctrl = area.controllers[params.controller];
                    if (ctrl) {
                        ctrl.initialize(req, res);
                        var actions = ctrl.actions();
                        var act = actions[params.action];
                        if (act) {
                            debugger;
                            act.execute(req, res);
                            matched = true;
                        }
                    }
                }
            });
        });
        if (!matched) {
            next();
        }
    };
};


module.exports = {
    areas: areas,
    handler: mvcHandler,
    controller: mvcController.define
};
