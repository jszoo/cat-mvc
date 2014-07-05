/*
* mvcFilters
* author: ronglin
* create date: 2014.7.4
*/

'use strict';

var utils = require('../utilities'),
    caching = require('../caching');

module.exports = {

	_filters: caching.region('mvc-filters-cache'),

	all: function() {
		return this._filters.all();
	},

	get: function(filterName) {
		return this._filters.get(filterName);
	},

	remove: function(filterName) {
		return this._filters.remove(filterName);
	},

	register: function(filterName, filter) {
		if (!filterName) {
			throw new Error('filterName is required');
		}
		if (!filter) {
			throw new Error('filter is required');
		}
		if (filter.className !== 'mvcFilter') {
			throw new Error('incorrect filter type');
		}
		this._filters.set(filterName, filter);
	},

	resolve: function(type, name, sett) {

	}
};
