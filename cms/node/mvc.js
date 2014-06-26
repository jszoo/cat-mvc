/*
* mvc
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

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

	_name: null, _impl: null,

	constructor: controller,
};

var mvcHandler = function(set) {

	return function(req, res, next) {
		next();
	};
};


module.exports = {
	areas: areas,
	handler: mvcHandler,
	controller: controller.define
};
