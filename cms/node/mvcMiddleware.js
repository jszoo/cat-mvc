/*
* mvcMiddleware
* author: ronglin
* create date: 2014.7.4
*/

'use strict';

var url = require('url'),
    utils = require('./utilities');

exports.xHeaders = function(set) {
    set = set || {};
    return {
        handle: function(req, res) {
            res.setHeader('X-Powered-By', 'RULEE');
            utils.each(set.headers, function(key, value) {
                res.setHeader(key, value);
            });
        }
    };
};

exports.ruleeUrl = function() {
    return {
        handle: function(req, res) {
            var rulee = req.rulee || (req.rulee = {});
            var prot = req.secure ? 'https' : 'http'; //eg: http
            var host = req.headers.host;              //eg: www.nodetest.cn:1337
            var path = req.url;                       //eg: /home?a=1
            rulee.url = url.parse(prot + '://' + host + path, true);
        }
    };
};

exports.ruleeForm = function() {
    return {
        handle: function(req, res) {
            var rulee = req.rulee || (req.rulee = {});
            utils.extend(rulee.form = {}, req.body);
        }
    };
};

exports.ruleeQuery = function() {
    return {
        handle: function(req, res) {
            var rulee = req.rulee || (req.rulee = {});
            if (utils.isObject(rulee.url.query)) {
                rulee.query = utils.extend({}, rulee.url.query);
            } else {
                rulee.query = utils.getQuery(rulee.url.search);
            }
        }
    };
};

exports.ruleeMethod = function() {
    return {
        handle: function(req, res) {
            var rulee = req.rulee || (req.rulee = {});
            rulee.method = req.method;
        }
    };
};

exports.ruleeSecure = function() {
    return {
        handle: function(req, res) {
            var rulee = req.rulee || (req.rulee = {});
            rulee.secure = !!req.secure;
        }
    };
};
