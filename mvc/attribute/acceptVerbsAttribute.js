/*
* acceptVerbsAttribute
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.12
*/

'use strict';

var utils = require('zoo-utils');

var acceptVerbsAttribute = exports.acceptVerbsAttribute = function(methods) {
	this.methodNames = methods; // GET,POST,PUT,DELETE,HEAD,PATCH,OPTIONS,etc...
	if (!utils.isString(this.methodNames)) {
		throw new Error('The methodNames of actionNameAttribute is invalid');
	}
};

acceptVerbsAttribute.prototype = {

    methodNames: null,

    constructor: acceptVerbsAttribute,

    isValidActionRequest: function(httpContext) {
        var methodName = httpContext.zoo.request.method;
        return this.methodNames.toUpperCase().indexOf(methodName) > -1;
    }
};
