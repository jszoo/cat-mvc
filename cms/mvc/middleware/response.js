/*
* response
* author: ronglin
* create date: 2014.7.4
* description: migrate from express
*/

'use strict';

var http = require('http'),
    path = require('path'),
    vary = require('vary'),
    mime = require('mime'),
    send = require('send'),
    typer = require('media-typer'),
    cookie = require('cookie'),
    sign = require('cookie-signature').sign,
    utils = require('../utilities');

var acceptParams = function(str, index) {
    var parts = str.split(/ *; */);
    var ret = { value: parts[0], quality: 1, params: {}, originalIndex: index };
    for (var i = 1; i < parts.length; ++i) {
        var pms = parts[i].split(/ *= */);
        if ('q' == pms[0]) {
            ret.quality = parseFloat(pms[1]);
        } else {
            ret.params[pms[0]] = pms[1];
        }
    }
    return ret;
};

var normalizeType = function(type) {
    return ~type.indexOf('/') ? acceptParams(type) : { value: mime.lookup(type), params: {} };
};

var normalizeTypes = function(types) {
    var ret = [];
    for (var i = 0; i < types.length; ++i) {
        ret.push(normalizeType(types[i]));
    }
    return ret;
};

var contentDisposition = function(filename) {
    var ret = 'attachment';
    if (filename) {
        filename = path.basename(filename);
        // if filename contains non-ascii characters, add a utf-8 version ala RFC 5987
        ret = /[^\040-\176]/.test(filename)
            ? 'attachment; filename="' + encodeURI(filename) + '"; filename*=UTF-8\'\'' + encodeURI(filename)
            : 'attachment; filename="' + filename + '"';
    }
    return ret;
};

var setCharset = function(type, charset) {
    if (!type || !charset) { return type; }
    // parse type
    var parsed = typer.parse(type);
    // set charset
    parsed.parameters.charset = charset;
    // format type
    return typer.format(parsed);
};

var response = function(set) {
    utils.extend(this, set);
};

response.prototype = {

    req: null, res: null,

    constructor: response, className: 'response',

    status: function(code) {
        if (code === undefined) {
            return this.res.statusCode;
        }
        if (utils.isNumber(code)) {
            this.res.statusCode = code;
        } else {
            throw new Error('The status code is required a number');
        }
    },

    header: function(field, value) {
        if (value === undefined) {
            if (utils.isString(field)) {
                return this.res.getHeader(field);
            }
            if (utils.isObject(field)) {
                for (var key in field) {
                    this.header(key, field[key]);
                }
            }
        } else {
            if (utils.isArray(value)) {
                value = value.map(String);
            } else {
                value = String(value);
            }
            if (field.toLowerCase() === 'content-type' && !/;\s*charset\s*=/.test(value)) {
                var charset = mime.charsets.lookup(value.split(';')[0]);
                if (charset) {
                    value += '; charset=' + charset.toLowerCase();
                }
            }
            this.res.setHeader(field, value);
        }
    },

    links: function(links) {
        var link = this.header('Link') || '';
        if (link) { link += ', '; }
        this.header('Link', link + Object.keys(links).map(function(rel) {
            return '<' + links[rel] + '>; rel="' + rel + '"';
        }).join(', '));
    },

    contentType: function(type) {
        if (!type) {
            return this.header('Content-Type');
        } else {
            this.header('Content-Type', ~type.indexOf('/') ? type : mime.lookup(type));
        }
    },

    vary: function(field) {
        vary(this.res, field);
    },

    location: function(url) {
        this.header('Location', url);
    },

    attachment: function(filename) {
        if (filename) { this.contentType(path.extname(filename)); }
        this.header('Content-Disposition', contentDisposition(filename));
    },

    clearCookie: function(name, options) {
        var opts = { expires: new Date(1), path: '/' };
        return this.cookie(name, '', options ? utils.extend(opts, options) : opts);
    },

    cookie: function(name, value, options) {
        options = utils.extend({}, options);
        var signed = options.signed, secret = this.req.secret;
        //
        if (signed && !secret) {
            throw new Error('cookieParser("secret") required for signed cookies');
        }
        if (utils.isNumber(value)) {
            value = value.toString();
        } else if (utils.isObject(value)) {
            value = 'j:' + JSON.stringify(value);
        }
        if (signed) {
            value = 's:' + sign(value, secret);
        }
        if ('maxAge' in options) {
            options.expires = new Date(Date.now() + options.maxAge);
            options.maxAge /= 1000;
        }
        if (!options.path) {
            options.path = '/';
        }
        //
        var headerVal = cookie.serialize(name, String(value), options);
        var prev = this.header('Set-Cookie');
        if (prev) {
            if (utils.isArray(prev)) {
                headerVal = prev.concat(headerVal);
            } else {
                headerVal = [prev, headerVal];
            }
        }
        this.header('Set-Cookie', headerVal);
    },

    format: function(obj) {
        var fn = obj.default;
        if (fn) { delete obj.default; }
        //
        var keys = Object.keys(obj);
        var key = this.req.rulee.accepts(keys);
        //
        this.vary('Accept');
        //
        if (key) {
            this.contentType(normalizeType(key).value);
            obj[key](this.req, this.res);
        } else if (fn) {
            fn();
        } else {
            var err = new Error('Not Acceptable'); err.status = 406;
            err.types = normalizeTypes(keys).map(function(o) { return o.value });
            throw err;
        }
    },

    redirect: function(url, permanent) {
        var body, status = (permanent ? 301 : 302);
        //
        this.format({
            text: function() {
                body = http.STATUS_CODES[status] + '. Redirecting to ' + encodeURI(url);
            },
            html: function() {
                var u = escapeHtml(url);
                body = '<p>' + http.STATUS_CODES[status] + '. Redirecting to <a href="' + u + '">' + u + '</a></p>';
            },
            default: function() {
                body = '';
            }
        });
        //
        this.location(url);
        this.status(status);
        this.header('Content-Length', Buffer.byteLength(body));
        //
        if (this.req.method === 'HEAD') {
            this.res.end();
        } else {
            this.res.end(body);
        }
    },

    download: function(path, filename, fn) {
        filename = filename || path;
        if (utils.isFunction(filename)) {
            fn = filename;
            filename = null;
        }
        this.sendfile(path, {
            headers: { 'Content-Disposition': contentDisposition(filename || path) }
        }, fn);
    },

    sendfile: function(path, options, fn) {
        options = options || {};
        options.maxage = options.maxage || options.maxAge || 0;
        var req = this.req, res = this.res, done;

        //
        if (!utils.isFunction(fn)) {
            fn = function(err) {
                throw err;
            };
        }

        // socket errors
        req.socket.on('error', error);

        // errors
        var error = function(err) {
            if (done) { return; }
            done = true;
            // clean up
            cleanup();
            // callback available
            fn(err);
        };

        // streaming
        var stream = function(stm) {
            if (!done) {
                cleanup();
                stm.on('end', fn);
            }
        };

        // cleanup
        var cleanup = function() {
            req.socket.removeListener('error', error);
        };

        // transfer
        var file = send(req, path, options);
        file.on('error', error);
        file.on('stream', stream);

        // set headers on successful transfer
        if (options.headers) {
            file.on('headers', function (res) {
                var obj = options.headers;
                var keys = Object.keys(obj);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    res.setHeader(k, obj[k]);
                }
            });
        }

        // pipe
        file.pipe(res);
        res.on('finish', cleanup);
    },

    send: function(body, status) {
        


        var self = this, encoding;
        var ensureCt = function(t) {
            if (!self.contentType()) { self.contentType(t); }
        };
        //
        if (utils.isNumber(status) && (body === null || body === undefined)) {
            body = http.STATUS_CODES[status];
            this.status(status);
            ensureCt('txt');
        }
        //
        var bt = utils.type(body);
        if (bt === 'string') {
            ensureCt('txt');
            encoding = 'utf8';
            var type = this.contentType();
            this.contentType(setCharset(type, 'utf-8'));
        }
        else if (bt === 'object') {
            if (Buffer.isBuffer(body)) {
                ensureCt('bin');
            }
            //TODO:
        }
        else if (bt === 'boolean' || bt === 'number') {
            body = String(body);
        }

        // populate Content-Length
        if (chunk !== undefined && !this.get('Content-Length')) {
            len = Buffer.isBuffer(chunk) ? chunk.length : Buffer.byteLength(chunk, encoding);
            this.set('Content-Length', len);
        }

        // ETag support
        var etag = len !== undefined && app.get('etag fn');
        if (etag && ('GET' === req.method || 'HEAD' === req.method)) {
            if (!this.get('ETag')) {
                etag = etag(chunk, encoding);
                etag && this.set('ETag', etag);
            }
        }

        // freshness
        if (this.req.fresh) {
            this.status(304);
        }

        // strip irrelevant headers
        if (204 == this.status() || 304 == this.status()) {
            this.res.removeHeader('Content-Type');
            this.res.removeHeader('Content-Length');
            this.res.removeHeader('Transfer-Encoding');
            body = '';
        }

        // skip body for HEAD
        if (this.req.method === 'HEAD') {
            this.res.end();
        } else {
            this.res.end(body, encoding);
        }
    }
};

module.exports = function() {
    return function(req, res, next, err) {
        res.rulee = new response({
            req: req,
            res: res
        });
        next(err);
    };
};
