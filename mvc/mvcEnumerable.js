/*
* mvcEnumerable
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.21
*/

'use strict';

var utils = require('zoo-utils');

var mvcEnumerable = module.exports = function(set) {
    utils.extend(this, set);
    this._inner = [];
};

mvcEnumerable.prototype = {
    
    _inner: null,

    constructor: mvcEnumerable,

    add: function(obj) {
        this._inner.push(obj);
    },

    exists: function(obj) {
        var found = false;
        utils.each(this._inner, function() {
            if (this === obj) {
                found = true;
                return false;
            }
        });
        return found;
    },

    count: function() {
        return this._inner.length;
    },

    remove: function(obj) {
        var found = false, self = this;
        utils.each(this._inner, function(i) {
            if (this === obj) {
                self._inner.splice(i, 1);
                found = true;
                return false;
            }
        });
        return found;
    },

    clear: function() {
        this._inner = [];
    }
};
