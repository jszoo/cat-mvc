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

    addModelError: function(key, error) {
        var state = this._inner.get(key);
        if (!state) {
            state = {
                key: key,
                value: null,
                errors: []
            };
        }
        if (error) {
            state.errors.push(error);
        }
        this._inner.set(key, state);
    },

    isValidField: function(namespace) {
        namespace = namespace.toLowerCase();
        var state = this._inner.get(namespace);
        if (state) {
            return (state.errors.length === 0);
        } else {
            var result = true;
            utils.each(this._inner.all(), function(key, state) {
                key = key.toLowerCase();
                if (key.length > namespace.length && key.indexOf(namespace) === 0) {
                    var chr = key.charAt(namespace.length);
                    if (chr === '.' || chr === '[') {
                        result = result && (state.errors.length === 0);
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
            if (this.errors.length > 0) {
                result = false;
                return false;
            }
        });
        return result;
    },

    setModelValue: function(key, value) {
        this.addModelError(key, null);
        var state = this._inner.get(key);
        state.value = value;
    },

    remove: function(key) {
        this._inner.remove(key);
    },

    clear: function() {
        this._inner.clear();
    }
};
