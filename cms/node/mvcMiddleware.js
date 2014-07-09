/*
* mvcMiddleware
* author: ronglin
* create date: 2014.7.4
*/

'use strict';

var url = require('url'),
    utils = require('./utilities');

exports.ruleeHeaders = function(set) {
    if (set = set || {}, !set.headers) { set.headers = { 'X-Powered-By': 'RULEE-MVC' }; }
    return {
        handle: function(req, res) {
            return utils.each(set.headers, function(key, value) {
                res.setHeader(key, value);
            });
        }
    };
};

exports.ruleeRequest = function() {
    return {
        handle: function(req, res) {
            var rulee = req.rulee || (req.rulee = {});
            //
            var prot = req.secure ? 'https' : 'http'; //eg: http
            var host = req.headers.host;              //eg: www.nodetest.cn:1337
            var path = req.url;                       //eg: /home?a=1
            rulee.url = url.parse(prot + '://' + host + path, true);
            //
            rulee.query = utils.isObject(rulee.url.query) ? utils.extend({}, rulee.url.query) : utils.getQuery(rulee.url.search);
            //
            rulee.form = utils.extend({}, req.body);
            //
            rulee.session = req.session;
            //
            rulee.secure = !!req.secure;
            //
            rulee.method = req.method;
            // ret
            return rulee;
        }
    };
};

exports.ruleeResponse = function() {
    return {
        handle: function(req, res) {
            var rulee = res.rulee || (res.rulee = {});
            //
            rulee.header = function(name, value) {
                return (value === undefined) ? res.header(name) : res.header(name, value);
            };
            rulee.redirect = function(url, permanent) {
                return res.redirect(url, permanent ? 301 : 302);
            };
            rulee.download = function(filePath, fileDownloadName) {
                return res.download(filePath, fileDownloadName);
            };
            rulee.send = function(content, status) {
                return (status === undefined) ? res.send(content) : res.send(content, status);
            };
            // ret
            return rulee;
        }
    };
};
