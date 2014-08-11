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

    },

    isValidField: function(key) {
        
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

    remove: function(key) {
        this._inner.remove(key);
    },

    clear: function() {
        this._inner.clear();
    }
};
