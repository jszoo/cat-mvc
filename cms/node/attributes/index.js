/*
* attributes
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities'),
    caching = require('../caching');
	attributes = caching.region('mvc-attribute-types-cache');

var attrs = module.exports = {

    all: function() {
        return attributes.all();
    },

    get: function(attrName) {
        return attributes.get(attrName);
    },

    remove: function(attrName) {
        return attributes.remove(attrName);
    },

    register: function(attrName, attrClass) {
        if (!utils.isString(attrName)) { throw new Error('Parameter "attrName" is incorrect'); }
        if (!utils.isFunction(attrClass)) { throw new Error('Parameter "attrClass" is incorrect'); }
        if (!utils.isFunction(attrClass.prototype.onAttach)) { throw new Error(attrName + ' attribute does not has onAttach prototype function'); }
        attributes.set(attrName, attrClass);
    },

    resolve: function(attrName, attrSett) {
    	var attrClass = this.get(attrName);
    	if (attrClass) {
    		return new attrClass(attrSett);
    	}
    },

    resolveConfig: function(config) {
        
    }
};

attrs.register('httpGet', require('./httpGet'));
attrs.register('httpPost', require('./httpPost'));
attrs.register('actionName', require('./actionName'));
