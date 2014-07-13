/*
* manager
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities'),
    caching = require('../caching'),
	inner = caching.region('mvc-attribute-types-cache');

var manager = module.exports = {

    all: function() {
        return inner.all();
    },

    get: function(attrName) {
        return inner.get(attrName);
    },

    remove: function(attrName) {
        return inner.remove(attrName);
    },

    register: function(attrName, attrClass) {
        if (!utils.isString(attrName)) { throw new Error('Parameter "attrName" require string type'); }
        if (!utils.isFunction(attrClass)) { throw new Error('Parameter "attrClass" require function type'); }
        inner.set(attrName, attrClass);
    },

    resolve: function(attrName, attrSett) {
    	var attrClass = this.get(attrName);
    	if (attrClass) {
    		return new attrClass(attrSett);
    	} else {
            return null;
        }
    },

    resolveConfig: function(config) {
        var attrs = [], self = this;
        if (utils.isObject(config)) {
            utils.each(config, function(name, sett) {
                attrs.push(self.resolve(name, sett));
            });
        }
        else if (utils.isString(config)) {
            var re = /([0-9a-z_-]+)\s*(\([^\)]*|,)/i;
            while (match = re.exec(config)) {
                
            }
        }
        // ret
        return new attributes({
            _attrs: attrs
        });
    }
};

var attributes = function(set) {
    utils.extend(this, set);
};

attributes.prototype = {

    _attrs: null,

    constructor: attributes, className: 'attributes',

    all: function() {
        return _attrs;
    },

    fire: function(eventName) {
        var args = utils.arg2arr(arguments, 1);
        utils.each(this._attrs, function(i, it) {
            if (it && utils.isFunction(it[eventName])) {
                it[eventName].apply(it, args);
            }
        });
    }
};

manager.register('httpGet', require('./httpGet'));
manager.register('httpPost', require('./httpPost'));
manager.register('actionName', require('./actionName'));
