/*
* request
* author: ronglin
* create date: 2014.7.4
* description: migrate from expressjs [https://github.com/visionmedia/express/blob/master/lib/request.js]
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
    var self = this;
    //
    getter(this, 'protocol', function() {
        var trust = self.req._app.get('trust-proxy-fn');
        if (!trust(self.req.connection.remoteAddress)) {
            return self.req.connection.encrypted ? 'https' : 'http';
        } else {
            // Note: X-Forwarded-Proto is normally only ever a
            //       single value, but this is to be safe.
            var proto = self.header('X-Forwarded-Proto') || 'http';
            return proto.split(/\s*,\s*/)[0];
        }
    });
    //
    var protocol = this.protocol;              //eg: http
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
    getter(this, 'method', function() { return self.req.method; });
    //
    getter(this, 'secure', function() { return (protocol === 'https'); });
    //
    getter(this, 'session', function() { return self.req.session; });
    //
    getter(this, 'xhr', function() {
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
    //
    getter(this, 'subdomains', function() {
        var offset = self.req._app.get('subdomain-offset');
        return (this.hostname || '').split('.').reverse().slice(offset);
    });
};

request.prototype = {

    req: null, res: null,

    constructor: request, className: 'request',

    header: function(field) {
        var hs = this.req.headers;
        field = field.toLowerCase();
        if (field === 'referer' || field === 'referrer') {
            return hs.referrer || hs.referer;
        } else {
            return hs[field];
        }
    },

    acceptsTypes: function() {
        var accept = accepts(this.req);
        return accept.types.apply(accept, arguments);
    },

    acceptsEncodings: function() {
        var accept = accepts(this.req);
        return accept.encodings.apply(accept, arguments);
    },

    acceptsCharsets: function() {
        var accept = accepts(this.req);
        return accept.charsets.apply(accept, arguments);
    },

    acceptsLanguages: function() {
        var accept = accepts(this.req);
        return accept.languages.apply(accept, arguments);
    }
};

module.exports = function() {
    return function(req, res, next, err) {
        req._ree = new request({
            req: req,
            res: res
        });
        next(err);
    };
};
