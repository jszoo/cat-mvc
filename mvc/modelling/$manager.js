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

    registerAll: function() {
        var self = this;
        utils.each(require('./dataType'), function(key, cls) {
            key = cls.prototype.typeName;
            if (key) { self.dataTypes.register(key, cls); }
        });
        utils.each(require('./validation'), function(key, cls) {
            key = cls.prototype.validName;
            if (key) { self.validations.register(key, cls); }
        });
    },

    /*
    * reslove setting to sepcified data type class and valiadator classes
    *   set: { type: 'string', required: true, ... }  /  set: 'string'
    */
    resolve: function(set) {
        var dtype, valids = [], typeClass;
        if (utils.isString(set)) {
            // resolve data type
            typeClass = this.dataTypes.get(set);
            if (typeClass) { dtype = new typeClass(); }
        }
        else if (set) {
            for (var typeName, typeClass, key in set) {
                if (!utils.hasOwn(set, key)) {
                    continue;
                }
                if (key.toLowerCase() === 'type') {
                    // resolve data type
                    typeName = set[key];
                    typeClass = this.dataTypes.get(typeName);
                    if (typeClass) { dtype = new typeClass(); }
                } else {
                    // resolve validations
                    typeName = key;
                    typeClass = this.validations.get(typeName);
                    if (typeClass) { valids.push(new typeClass(set[key])); }
                }
            }
        }
        return {
            type: dtype,
            valids: valids
        };
    }
};

var dataTypesManager = function(store) {
    this._inner = caching.region('mvc-modelling-datatypes-cache', store);
};

dataTypesManager.prototype = {

    _inner: null,

    constructor: dataTypesManager, className: 'dataTypesManager',

    register: function(name, klass) {
        if (!name) { throw new Error('Register data type "name" is required'); }
        if (!utils.isFunction(klass)) { throw new Error('Register data type "class" is function required'); }
        return this._inner.set(name, klass);
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

    register: function(name, klass) {
        if (!name) { throw new Error('Register data type "name" is required'); }
        if (!utils.isFunction(klass)) { throw new Error('Register data type "class" is function required'); }
        return this._inner.set(name, klass);
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
