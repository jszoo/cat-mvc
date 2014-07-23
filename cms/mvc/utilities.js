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
    }(),

    deferProxy: function(fn) {
        return function() {
            var as = arguments;
            switch(as.length) {
                case 0: setImmediate(fn); break;
                case 1: setImmediate(fn, as[0]); break;
                case 2: setImmediate(fn, as[0], as[1]); break;
                case 3: setImmediate(fn, as[0], as[1], as[2]); break;
                case 4: setImmediate(fn, as[0], as[1], as[2], as[3]); break;
                case 5: setImmediate(fn, as[0], as[1], as[2], as[3], as[4]); break;
                case 6: setImmediate(fn, as[0], as[1], as[2], as[3], as[4], as[5]); break;
                case 7: setImmediate(fn, as[0], as[1], as[2], as[3], as[4], as[5], as[6]); break;
                case 8: setImmediate(fn, as[0], as[1], as[2], as[3], as[4], as[5], as[6], as[7]); break;
                case 9: setImmediate(fn, as[0], as[1], as[2], as[3], as[4], as[5], as[6], as[7], as[8]); break;
                default: as = utils.arg2arr(as); as.splice(0, 0, fn); setImmediate.apply(null, as); break;
            }
        };
    }

});