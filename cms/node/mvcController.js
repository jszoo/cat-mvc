/*
* mvcController
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var events = require('events'),
	utils = require('./utilities'),
	mvcInject = require('./mvcInject'),
    mvcAction = require('./mvcAction');


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
        var params = [];
        var paramNames = mvcInject.annotate(this.impl());
        if (!paramNames || paramNames.length === 0) { return params; }
        //
        var self = this, actionWrap;
        utils.each(paramNames, function(i, name) {
            var loweName = name.toLowerCase();
            if (loweName.charAt(0) === '$') {
                loweName = loweName.substr(1);
            }
            switch(loweName) {
                default: params.push(null); break;
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
        //
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

module.exports = mvcController;
