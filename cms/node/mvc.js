/*
* mvc
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var events = require('events');
var areas = require('./mvcAreas');
var utils = require('./utilities');


var controller = function(name, impl) {
	if (utils.isFunction(name)) { 
		this._name = null;
		this._impl = name;
	} else {
		this._name = name;
		this._impl = impl;
	}
};

controller.define = function(name, impl) {
	return new controller(name, impl);
};

controller.prototype = {

	_name: null, _impl: null, _actions: null,

	constructor: controller,

	name: function(n) {
		return (n === undefined) ? (this._name) : (this._name = n);
	},

	initialize: function(req, res) {
		var scope = new controllerScope();
		this._impl.call(scope, req, res);
	}
};


var controllerScope = function() {
	this._actions = {};
	this._events = new events.EventEmitter();
};

controllerScope.prototype = {

	_actions: null, _events: null, 

	constructor: controllerScope,

	on: function() {
		var args = utils.arg2arr(arguments);
		this._events.on.apply(this._events, args);
		//
		return this;
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
				set = { methods: set.split(',') };
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
		act.methods = set.methods;
		act.filters = set.filters;
		//
		return this;
	}
};


var mvcHandler = function(set) {
	return function(req, res, next) {
		var allAreas = areas.all();
		debugger;
		next();
	};
};


module.exports = {
	areas: areas,
	handler: mvcHandler,
	controller: controller.define,
	controllerScope: controllerScope
};
