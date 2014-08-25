/*
* mvcModelState
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.1
*/

'use strict';

var utils = require('zoo-utils');

var mvcModelState = module.exports = function(set) {
    utils.extend(this, set);
    this._inner = new utils.dictionary(true);
};

mvcModelState.prototype = {

    _inner: null,

    constructor: mvcModelState,

    all: function() {
        return this._inner.all();
    },

    get: function(namespace) {
        return this._inner.get(namespace);
    },

    exists: function(namespace) {
        return this._inner.exists(namespace);
    },

    remove: function(namespace) {
        return this._inner.remove(namespace);
    },

    count: function() {
        return this._inner.count();
    },

    clear: function() {
        this._inner.clear();
        return this;
    },

    set: function(namespace, state) {
        if (state === undefined) {
            state = namespace;
            namespace = null;
        }
        //
        if (!state) { throw new Error('State object is required'); }
        if (!(state instanceof stateItem)) { throw new Error('The specified state object is invalid type'); }
        //
        namespace = (namespace || state.namespace);
        //
        if (!utils.isString(namespace)) { throw new Error(utils.format('State namespace requires string type but got {0} type', utils.type(namespace))); }
        if (!namespace) { throw new Error('State namespace is required'); }
        //
        state.namespace = namespace;
        this._inner.set(namespace, state);
        return this;
    },

    addModelError: function(namespace, error) {
        var state = this._inner.get(namespace);
        if (!state) {
            this.set(namespace, state = new stateItem());
        }
        if (error) {
            state.addError(error);
        }
    },

    setModelValue: function(namespace, value) {
        this.addModelError(namespace, null);
        var state = this._inner.get(namespace);
        state.setValue(value);
    },

    isValidField: function(namespace) {
        namespace = namespace.toLowerCase();
        var state = this._inner.get(namespace);
        if (state) {
            return !state.hasError();
        } else {
            var result = true;
            utils.each(this._inner.all(), function(key, state) {
                key = key.toLowerCase();
                if (key.length > namespace.length && key.indexOf(namespace) === 0) {
                    var chr = key.charAt(namespace.length);
                    if (chr === '.' || chr === '[') {
                        result = result && !state.hasError();
                        if (!result) { return false; }
                    }
                }
            });
            return result;
        }
    },

    isValid: function() {
        var result = true;
        utils.each(this._inner.all(), function() {
            if (this.hasError()) {
                result = false;
                return false;                
            }
        });
        return result;
    }
};

var stateItem = function() {
    this.errors = [];
};

stateItem.prototype = {

    namespace: null, value: null, errors: null,
    
    constructor: stateItem,

    setValue: function(v) {
        this.value = v;
    },

    addError: function(error) {
        this.errors.push(error);
    },

    hasError: function() {
        return this.errors.length > 0;
    }
};
