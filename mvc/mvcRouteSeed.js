/*
* route provider
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.7
*/

'use strict';

var utils = require('zoo-utils'),
    caching = require('zoo-cache'),
    pathToRegexp = require('path-to-regexp'),
    cache = caching.region('mvc-route-seed-cache');

var getOrCreate = function(expression) {
    var item = cache.get(expression);
    if (!item) {
        var keys = [], regexp = pathToRegexp(expression, keys, {
            sensitive: false,
            strict: false,
            end: false
        });
        cache.set(expression, item = {
            regexp: regexp,
            keys: keys
        });
    }
    return item;
};

var decode = function(param) {
    if (!param) {
        return param;
    }
    try {
        return decodeURIComponent(param);
    } catch (ex) {
        var err = new Error(utils.format('Failed to decode param "{0}"', param));
        err.status = 400;
        throw err;
    }
};

module.exports = {

    routeData: function(expression, defaultValues, urlPath) {
        var item = getOrCreate(expression);
        var match = item.regexp.exec(urlPath);
        if (!match) { return null; }
        //
        var data = [];
        utils.each(item.keys, function(i, it) {
            var value = decode(match[i + 1]);
            if (!value) {
                var fname = utils.formalStr(it.name);
                if (fname in defaultValues) {
                    value = defaultValues[fname];
                }
            }
            data.push({
                name: it.name,
                value: value
            });
        });
        //
        return data;
    },

    resolveUrl: function(expression, defaultValues, routeValues) {
        var values = {}, querys = {};
        utils.each(routeValues, function(key, val) {
            key = utils.formalStr(key);
            values[key] = val;
            querys[key] = val;
        });
        //
        var item = getOrCreate(expression), expstr = expression;
        utils.each(item.keys, function() {
            var fname = utils.formalStr(this.name);
            var value = values[fname] || defaultValues[fname];
            var regstr = utils.format('{0}:{1}[^{0}]*', this.delimiter, this.name);
            var repstr = value ? this.delimiter + value : '';
            expstr = expstr.replace(new RegExp(regstr, 'i'), repstr);
            querys[fname] =  undefined;
        });
        //
        querys['area'] = undefined;
        return utils.appendQuery(expstr, querys);
    },

    resolveKeys: function(expression) {
        var keys = [], item = getOrCreate(expression);
        utils.each(item.keys, function() { keys.push(this.name); });
        return keys;
    }

};
