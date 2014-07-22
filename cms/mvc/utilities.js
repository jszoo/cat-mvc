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

    /*
    * callEachAsync(items, param_1, param_2, ..., param_n, sett)
    * the last argument is the setting object
    * sett: {
    *   items: [obj1,obj2] / {k1:obj1,k2:obj2},
    *   funcName: 'xxx',
    *   callback: function(vals, err) { },
    *   handler: function(obj, val) { }
    * }
    */
    callEachAsync: function() {
        var filterItems = function(items, funcName) {
            var rets = [];
            utils.each(items, function(i, it) {
                if (it && utils.isFunction(it[funcName])) {
                    rets.push(it);
                }
            });
            return rets;
        };
        //
        return function() {
            var sett = arguments[arguments.length - 1];
            //
            if (!utils.isObject(sett)) {
                throw new Error('Setting object not found which requires items + funcName + callback and handler is optional');
            }
            if (!sett.items) {
                throw new Error('Setting object can not found "items" object/array');
            }
            if (!utils.isString(sett.funcName)) {
                throw new Error('Setting object can not found "funcName" string');
            }
            if (!utils.isFunction(sett.callback)) {
                throw new Error('Setting object can not found "callback" function');
            }
            if (!utils.isFunction(sett.handler)) {
                sett.handler = function() { };
            }
            //
            var items = filterItems(sett.items, sett.funcName);
            if (items.length === 0) {
                sett.callback();
                return;            
            }
            //
            var args = utils.arg2arr(arguments), index = -1, item, canceled = false;
            var next = function(err) {
                if (index > -1) {
                    if (err) {
                        sett.callback(err);
                        return;
                    }
                    if (sett.handler(item) === false) {
                        canceled = true;
                    }
                }
                if (!canceled) {
                    item = items[++index];
                    if (item) {
                        try {
                            item[sett.funcName].apply(item, args);
                        } catch (ex) {
                            sett.callback(ex);
                        }
                        return;
                    }
                }
                sett.callback();
            };
            //
            args.pop();
            args.push(next);
            next();
        };
    }()

});