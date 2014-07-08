/*
* utilities
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var path = require('path'),
    utils = require('../jsg/utilities'),
    cmsDir = path.normalize(__dirname + path.sep + '..');

module.exports = utils.extend({}, utils, {

    absolutePath: function() {
        var args = utils.arg2arr(arguments);
        if (path.sep === '\\') {
            utils.each(args, function(i, val) {
                args[i] = val.replace(/\//g, '\\');
            });
        }
        args.unshift(cmsDir);
        return path.join.apply(path, args);
    },

    isAbsolute: function(path) {
        if ('/' == path.charAt(0)) { return true; }
        if (':' == path.charAt(1) && '\\' == path.charAt(2)) { return true; }
        if ('\\\\' == path.substring(0, 2)) { return true; } // Microsoft Azure absolute path
        return false;
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

    parseUrl: function() {
        var _keys = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
        var _parser = {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
            loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
        };
        return function(url, strict) {
            var parser = _parser[!!strict ? 'strict' : 'loose'];
            var raw = url; url = decodeURIComponent(url);
            var match = parser.exec(url), i = _keys.length, ret = {};
            while (i--) {
                ret[_keys[i]] = match[i] || '';
            }
            return ret;
        };
    }()

});