/*
* mvcMiddleware
* author: ronglin
* create date: 2014.7.4
*/

'use strict';

var utils = require('./utilities');

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

exports.ruleeUrl = function(set) {
    set = set || {};
    return {
        handle: function(req, res) {
            var rulee = req.rulee || (req.rulee = {});
            var url = rulee.url = {};
            url.host = req.headers.host; //eg: www.nodetest.cn:1337
            url.path = req.url;          //eg: /home
        }
    };
};

exports.ruleeForm = function(set) {
    set = set || {};
    return {
        handle: function(req, res) {
            var rulee = req.rulee || (req.rulee = {});
            utils.extend(rulee.form = {}, req.body);
        }
    };
};

exports.ruleeQuery = function(set) {
    set = set || {};
    return {
        handle: function(req, res) {
            var rulee = req.rulee || (req.rulee = {});
            utils.extend(rulee.query = {}, req.query);
        }
    };
};

exports.ruleeMethod = function(set) {
    set = set || {};
    return {
        handle: function(req, res) {
            var rulee = req.rulee || (req.rulee = {});
            rulee.method = req.method;
        }
    };
};

exports.ruleeSecure = function(set) {
    set = set || {};
    return {
        handle: function(req, res) {
            var rulee = req.rulee || (req.rulee = {});
            rulee.secure = !!req.secure;
        }
    };
};
