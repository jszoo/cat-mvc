/*
* mvcMatcher
* author: ronglin
* create date: 2014.6.30
*/

'use strict';

var pathToRegexp = require('path-to-regexp'),
    utils = require('./utilities');

var decode = function(param) {
    if (!param) {
        return param;
    }
    try {
        return decodeURIComponent(param);
    } catch (ex) {
        var err = new Error('failed to decode param "' + param + '"');
        err.status = 400;
        throw err;
    }
};

module.exports = function (set) {
    set = set || {};
    //
    return function (path) {
        var keys = [], re = pathToRegexp(path, keys, set);
        //
        return function (pathname) {
            var m = re.exec(pathname);
            if (!m) { return false; }
            //
            var params = [];
            utils.each(keys, function(i, it) {
                var value = decode(m[i +1]);
                if (value && it.repeat) {
                    value = value.split(it.delimiter);
                }
                params.push({
                    value: value,
                    name: it.name.toLowerCase()
                });
            });
            // ret
            return params;
        }
    };
};
