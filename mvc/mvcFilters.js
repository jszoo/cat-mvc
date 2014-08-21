/*
* mvcFilters
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.21
*/

'use strict';

var utils = require('zoo-utils');

var mvcFilters = module.exports = function(set) {
    utils.extend(this, set);
    this._inner = [];
};

mvcFilters.prototype = {
	
	_inner: null,

    constructor: mvcFilters,

    add: function(filter, order) {
    	this._inner.push({
    		filter: filter,
    		order: order
    	});
    },

    exists: function(filter) {
    	var found = false;
    	utils.each(this._inner, function() {
    		if (this.filter === filter) {
    			found = true;
    			return false;
    		}
    	});
    	return found;
    },

    count: function() {
    	return this._inner.length;
    },

    remove: function() {
    	var index = -1;
    	utils.each(this._inner, function(i) {
    		if (this.filter === filter) {
    			index = i;
    			return false;
    		}
    	});
    	this._inner.splice(index);
    	return index !== -1;
    },

    clear: function() {
    	this._inner = [];
    }
};
