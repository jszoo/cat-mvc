/*
* mvcMiddleware
* author: ronglin
* create date: 2014.7.4
*/

'use strict';

var utils = require('./utilities');

exports.xHeaders = function(set) {
    set = set || {};
    var process = function(req, res) {
        res.setHeader('X-Powered-By', 'RULEE');
        utils.each(set.headers, function(key, value) {
            res.setHeader(key, value);
        });
    };
    // ret
    return { handle: process };
};

exports.ruleeUrl = function(set) {
    set = set || {};
    var process = function(req, res) {
        //
        var rulee = req.rulee || (req.rulee = {});
        var url = rulee.url || (rulee.url = {});
        //
        var host = req.headers.host; //eg: www.nodetest.cn:1337
        var path = req.url;          //eg: /home
    };
    // ret
    return { handle: process };
};

exports.ruleeForm = function(set) {
    set = set || {};
    var process = function(req, res) {
        //
        var rulee = req.rulee || (req.rulee = {});
        var form = rulee.form || (rulee.form = {});
        //
        utils.extend(form, req.body);
    };
    // ret
    return { handle: process };
};

exports.ruleeQuery = function(set) {
    set = set || {};
    var process = function(req, res) {
        //
        var rulee = req.rulee || (req.rulee = {});
        var query = rulee.query || (rulee.query = {});
        //
        utils.extend(query, req.query);
    };
    // ret
    return { handle: process };
};
