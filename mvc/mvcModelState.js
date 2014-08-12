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

    addModelError: function(namespace, error) {
        var state = this._inner.get(namespace);
        if (!state) {
            this._inner.set(namespace, state = {
                value: null, errors: [],
                namespace: namespace
            });
        }
        if (error) {
            state.errors.push(error);
        }
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

    setModelValue: function(namespace, value) {
        this.addModelError(namespace, null);
        var state = this._inner.get(namespace);
        state.value = value;
    },

    remove: function(namespace) {
        this._inner.remove(namespace);
    },

    clear: function() {
        this._inner.clear();
    }
};
