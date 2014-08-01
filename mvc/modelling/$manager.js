/*
* modellingManager
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.1
*/

'use strict';

var utils = require('../utilities'),
    caching = require('../caching');

var modellingManager = module.exports = function(store) {
    this.dataTypes = new dataTypesManager(store);
    this.validations = new validationsManager(store);
};

modellingManager.prototype = {

    dataTypes: null, validations: null,

    constructor: modellingManager, className: 'modellingManager',

    resolve: function(model) {
        
    }
};

var dataTypesManager = function(store) {
    this._inner = caching.region('mvc-modelling-datatypes-cache', store);
};

dataTypesManager.prototype = {

    _inner: null,

    constructor: dataTypesManager, className: 'dataTypesManager',

    register: function(name) {

    },

    get: function(name) {
        return this._inner.get(name);
    },

    exists: function(name) {
        return this._inner.exists(name);
    },

    remove: function(name) {
        return this._inner.remove(name);
    },

    clear: function() {
        return this._inner.clear();
    }
};

var validationsManager = function(store) {
    this._inner = caching.region('mvc-modelling-validations-cache', store);
};

validationsManager.prototype = {

    _inner: null,

    constructor: validationsManager, className: 'validationsManager',

    register: function(name) {

    },

    get: function(name) {
        return this._inner.get(name);
    },

    exists: function(name) {
        return this._inner.exists(name);
    },

    remove: function(name) {
        return this._inner.remove(name);
    },

    clear: function() {
        return this._inner.clear();
    }
};
