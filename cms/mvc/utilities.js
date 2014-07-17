/*
* utilities
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var path = require('path'),
    utils = require('../jsg/utilities');

module.exports = utils.extend({}, utils, {

    isAbsolute: function(path) {
        if ('/' == path.charAt(0)) { return true; }
        if (':' == path.charAt(1) && '\\' == path.charAt(2)) { return true; }
        if ('\\\\' == path.substring(0, 2)) { return true; } // Microsoft Azure absolute path
        return false;
    },

    tryLower: function(str) {
        if (!str || !this.isString(str)) { return str };
        return str.toLowerCase();
    },

    tryLowerEqual: function(str1, str2) {
        return this.tryLower(str1) === this.tryLower(str2);
    },

    formalStr: function(str) {
        if (!str) { return str; }
        return str.replace(/^\s+|\s+$/g, '').toLowerCase();
    },

    formalObj: function(obj) {
        if (!obj) { return obj; }
        var ret = {}, self = this;
        utils.each(obj, function(key, val) {
            ret[self.formalStr(key)] = val;
        });
        return ret;
    },

    defer: function() {
        if (typeof setImmediate === 'function') {
            return setImmediate;
        }
        return function(fn) {
            process.nextTick(fn.bind.apply(fn, arguments));
        };
    }()

});