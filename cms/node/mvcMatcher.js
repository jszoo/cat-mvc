/*
* mvcMatcher
* author: ronglin
* create date: 2014.6.30
* reference:
*   https://www.npmjs.org/package/path-to-regexp
*   http://forbeslindesay.github.io/express-route-tester/
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
            var match = re.exec(pathname);
            if (!match) { return false; }
            //
            var params = [];
            utils.each(keys, function(i, it) {
                params.push({
                    name: it.name,
                    value: decode(match[i + 1])
                });
            });
            // ret
            return params;
        }
    };
};
