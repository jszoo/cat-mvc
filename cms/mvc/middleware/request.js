/*
* request
* author: ronglin
* create date: 2014.7.4
*/

'use strict';

var parse = require('url').parse,
    utils = require('../utilities');

var getter = function(obj, name, value) {
    Object.defineProperty(obj, name, {
        configurable: false,
        enumerable: true,
        writable: false,
        value: value
    });
};

module.exports = function() {
    //
    return function(req, res, next, err) {
        var rulee = req.rulee || (req.rulee = {});
        //
        var secure = !!req.secure;
        var protocol = secure ? 'https' : 'http'; //eg: http
        var host = req.headers.host;              //eg: www.nodetest.cn:1337
        var path = req.url;                       //eg: /home?a=1
        var url = parse(protocol + '://' + host + path, true);
        //
        getter(rulee, 'url', url);
        //
        getter(rulee, 'query', utils.isObject(url.query) ? utils.extend({}, url.query) : utils.getQuery(url.search));
        //
        getter(rulee, 'form', utils.extend({}, req.body));
        //
        getter(rulee, 'method', req.method);
        //
        getter(rulee, 'secure', secure);
        //
        getter(rulee, 'session', req.session);
        //
        next(err);
    };
};
