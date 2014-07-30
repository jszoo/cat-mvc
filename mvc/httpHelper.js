/*
* httpHelper
* author: ruleechen 
* contact: rulee@live.cn
* create date: 2014.7.25
* description: migrate from expressjs [https://github.com/strongloop/express/blob/master/lib/utils.js]
*/

'use strict';

var mime = require('send').mime,
    crc32 = require('buffer-crc32'),
    crypto = require('crypto'),
    basename = require('path').basename,
    proxyaddr = require('proxy-addr'),
    typer = require('media-typer'),
    utils = require('./utilities');

module.exports = {

    escapeHtml: function(html) {
        return String(html)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    },

    compileETag: function(val) {
        var t = utils.type(val);
        if (t === 'function') {
            return val;
        }
        if (val === true) {
            return this.wetag;
        }
        if (val === false) {
            return null;
        }
        if (val === 'strong') {
            return this.etag;
        }
        if (val === 'weak') {
            return this.wetag;
        }
        throw new TypeError('unknown value for etag function: ' + val);
    },

    etag: function(body, encoding) {
        if (body.length === 0) {
            // fast-path empty body
            return '"1B2M2Y8AsgTpgAmY7PhCfg=="';
        } else {
            var hash = crypto.createHash('md5').update(body, encoding).digest('base64');
            return '"' + hash + '"';
        }
    },

    wetag: function(body, encoding) {
        if (body.length === 0) {
            // fast-path empty body
            return 'W/"0-0"';
        } else {
            var buf = Buffer.isBuffer(body) ? body : new Buffer(body, encoding);
            return 'W/"' + buf.length.toString(16) + '-' + crc32.unsigned(buf) + '"';
        }
    },

    compileTrust: function(val) {
        var t = utils.type(val);
        if (t === 'function') {
            return val;
        }
        if (t === 'number') {
            return function(a, i) { return i < val; }; // Support trusting hop count
        }
        if (val === true) {
            return function() { return true; }; // Support plain true/false
        }
        if (t === 'string') {
            val = val.split(/ *, */); // Support comma-separated values
        }
        return proxyaddr.compile(val || []);
    },

    acceptParams: function(str, index) {
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
    },

    normalizeType: function(type) {
        return ~type.indexOf('/') ? this.acceptParams(type) : { value: mime.lookup(type), params: {} };
    },

    normalizeTypes: function(types) {
        var ret = [];
        for (var i = 0; i < types.length; ++i) {
            ret.push(this.normalizeType(types[i]));
        }
        return ret;
    },

    contentDisposition: function(filename) {
        var ret = 'attachment';
        if (filename) {
            filename = basename(filename);
            // if filename contains non-ascii characters, add a utf-8 version ala RFC 5987
            ret = /[^\040-\176]/.test(filename)
                ? 'attachment; filename="' + encodeURI(filename) + '"; filename*=UTF-8\'\'' + encodeURI(filename)
                : 'attachment; filename="' + filename + '"';
        }
        return ret;
    },

    setCharset: function(type, charset) {
        if (!type || !charset) { return type; }
        // parse type
        var parsed = typer.parse(type);
        // set charset
        parsed.parameters.charset = charset;
        // format type
        return typer.format(parsed);
    }

};
