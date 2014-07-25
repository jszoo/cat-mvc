/*
* request
* author: ronglin
* create date: 2014.7.4
* description: migrate from express
*/

'use strict';

var parse = require('url').parse,
    accepts = require('accepts'),
    fresh = require('fresh'),
    utils = require('../utilities');

var getter = function(obj, name, getter) {
    Object.defineProperty(obj, name, {
        configurable: true,
        enumerable: true,
        get: getter
    });
};

var request = function(set) {
    utils.extend(this, set);
    //
    var self = this;
    var protocol = 'http';                     //eg: http
    var host = this.req.headers.host;          //eg: www.nodetest.cn:1337
    var path = this.req.url;                   //eg: /home?a=1
    var url = parse(protocol + '://' + host + path, true);
    //
    getter(this, 'url', function() { return url; });
    //
    getter(this, 'query', function() { return utils.isObject(url.query) ? utils.extend({}, url.query) : utils.getQuery(url.search); });
    //
    getter(this, 'form', function() { return utils.extend({}, self.req.body); });
    //
    getter(this, 'protocol', function() { return protocol; }); //TODO:
    //
    getter(this, 'method', function() { return self.req.method; });
    //
    getter(this, 'secure', function() { return (protocol === 'https'); });
    //
    getter(this, 'session', function() { return self.req.session; });
    //
    getter(this, 'isxhr', function() {
        var val = self.header('X-Requested-With') || '';
        return ('xmlhttprequest' === val.toLowerCase());
    });
    //
    getter(this, 'fresh', function() {
        var method = self.req.method;
        var s = self.res.statusCode;
        // GET or HEAD for weak freshness validation only
        if (method !== 'GET' && method !== 'HEAD') {
            return false;
        }
        // 2xx or 304 as per rfc2616 14.26
        if ((s >= 200 && s < 300) || 304 === s) {
            return fresh(self.req.headers, self.res._headers);
        }
        // default
        return false;
    });
};

request.prototype = {

    req: null, res: null,

    constructor: request, className: 'request',

    header: function(field) {
        var hs = this.req.headers;
        switch (field = field.toLowerCase()) {
            case 'referer':
            case 'referrer':
                return hs.referrer || hs.referer;
            default:
                return hs[field];
        }
    },

    accepts: function() {
        var accept = accepts(this.req);
        return accept.types.apply(accept, arguments);
    }
};

module.exports = function() {
    return function(req, res, next, err) {
        req.rulee = new request({
            req: req,
            res: res
        });
        next(err);
    };
};
