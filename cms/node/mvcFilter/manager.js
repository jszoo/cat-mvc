/*
* mvcFilters
* author: ronglin
* create date: 2014.7.4
*/

'use strict';

var utils = require('../utilities'),
    caching = require('../caching');

module.exports = {

    _selectFilters: caching.region('mvc-filter-select-cache'),

    _methodfilters: caching.region('mvc-filter-method-cache'),

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
        type = utils.trim(type).toLowerCase();
        name = utils.trim(name).toLowerCase();
        //TODO:
    },

    resolveSetts: function(type, names) {
        if (!type || !names) { return null; }
        //
        var filtersSett = {};
        if (utils.isObject(names)) {
            utils.each(names, function(name, val) {
                filtersSett[name] = val;
            });
        }
        else if (utils.isString(names)) {
            utils.each(names.split(','), function(i, name) {
                filtersSett[name] = true;
            });
        }
        //
        var filters = [];
        utils.each(filtersSett, function(name, sett) {
            var obj = mvcFilters.resolve(type, name, sett);
            if (obj) { filters.push(obj); }
        });
        //
        return filters.length ? filters : null;
    }
};
