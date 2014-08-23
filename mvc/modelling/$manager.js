/*
* modellingManager
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.1
*/

'use strict';

var utils = require('zoo-utils'),
    caching = require('zoo-cache');

var modellingManager = module.exports = function(store) {
    this.dataTypes = new dataTypeManager(store);
    this.validators = new validatorManager(store);
};

modellingManager.prototype = {

    dataTypes: null, validators: null,

    constructor: modellingManager,

    discover: function() {
        var self = this;
        utils.each(require('./datatype'), function(key, cls) { self.dataTypes.register(key, cls); });
        utils.each(require('./validator'), function(key, cls) { self.validators.register(key, cls); });
    },

    clear: function() {
        this.dataTypes.clear();
        this.validators.clear();
    },

    /*
    * reslove setting to sepcified data type class and valiadator classes
    *   set: { type: 'string', required: true, ... }  /  set: 'string'
    */
    resolve: function(set) {
        var dtype, valids, typeClass, self = this;
        //
        if (utils.isString(set)) {
            // resolve data type
            typeClass = this.dataTypes.get(set);
            if (typeClass) { dtype = new typeClass(); }
        }
        else if (set) {
            utils.each(set, function(key, val) {
                if (!utils.hasOwn(set, key)) {
                    return;
                }
                if (key.toLowerCase() === 'type') {
                    // resolve data type
                    typeClass = self.dataTypes.get(val);
                    if (typeClass) { dtype = new typeClass(); }
                } else {
                    // resolve validators
                    typeClass = self.validators.get(key);
                    if (typeClass) {
                        if (!valids) { valids = []; }
                        valids.push(new typeClass(set[key]));
                    }
                }
            });
        }
        return new modellingMetas(dtype, valids);
    }
};

var modellingMetas = function(typeObj, validators){
    this.typeObj = typeObj;
    this.validators = validators;
};

modellingMetas.prototype = {

    typeObj: null, validators: null,
    
    constructor: modellingMetas,

    has: function() {
        return this.typeObj || this.validators;
    },

    parse: function(value, fieldName, reportError) {
        if (this.typeObj) {
            try {
                value = this.typeObj.parse(value, fieldName);
            } catch (ex) {
                reportError(ex);
            }
        }
        return value;
    },

    validate: function(value, fieldName, reportError) {
        if (this.validators) {
            utils.each(this.validators, function(i, obj) {
                try {
                    obj.validate(value, fieldName);
                } catch (ex) {
                    reportError(ex);
                }
            });
        }
        return value;
    },

    exe: function(value, fieldName, reportError) {
        value = this.parse(value, fieldName, reportError);
        value = this.validate(value, fieldName, reportError);
        return value;
    }
};

var dataTypeManager = function(store) {
    this._inner = caching.region('mvc-modelling-datatypes-cache', store);
};

dataTypeManager.prototype = {

    _inner: null,

    constructor: dataTypeManager,
    
    all: function() {
        return this._inner.all();
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

    count: function() {
        return this._inner.count();
    },

    clear: function() {
        return this._inner.clear();
    },

    set: function(name, klass) {
        this.remove(name);
        this.register(name, klass);
    },

    register: function(name, klass) {
        if (!utils.isString(name)) { throw new Error(utils.format('Data type name requires string type but got {0} type', utils.type(name))); }
        if (!name) { throw new Error('Data type name is required'); }
        if (this.exists(name)) { throw new Error(utils.format('Data type "{0}" already exists', name)); }
        if (!utils.isFunction(klass)) { throw new Error(utils.format('Data type "{0}" requires function type class but got {1} type', name, utils.type(klass))); }
        return this._inner.set(name, klass);
    }
};

var validatorManager = function(store) {
    this._inner = caching.region('mvc-modelling-validators-cache', store);
};

validatorManager.prototype = {

    _inner: null,

    constructor: validatorManager,

    all: function() {
        return this._inner.all();
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

    count: function() {
        return this._inner.count();
    },

    clear: function() {
        return this._inner.clear();
    },

    set: function(name, klass) {
        this.remove(name);
        this.register(name, klass);
    },

    register: function(name, klass) {
        if (!utils.isString(name)) { throw new Error(utils.format('Validator name requires string type but got {0} type', utils.type(name))); }
        if (!name) { throw new Error('Validator name is required'); }
        if (this.exists(name)) { throw new Error(utils.format('Valiadator "{0}" already exists', name)); }
        if (!utils.isFunction(klass)) { throw new Error(utils.format('Validator "{0}" requires function type class but got {1} type', name, utils.type(klass))); }
        return this._inner.set(name, klass);
    }
};
