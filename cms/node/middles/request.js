/*
* request
* author: ronglin
* create date: 2014.7.4
*/

'use strict';

var url = require('url'),
    utils = require('../utilities');

module.exports = function() {
    //
    return function(req, res, next, err) {
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
        //
        next(err);
    };
};
