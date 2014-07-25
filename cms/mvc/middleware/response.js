/*
* response
* author: ronglin
* create date: 2014.7.4
*/

'use strict';

var utils = require('../utilities');

module.exports = function() {
    //
    return function(req, res, next, err) {
        var rulee = res.rulee || (res.rulee = {});
        //
        rulee.statusCode = function(code) {
            if (code === undefined) {
                return res.statusCode;
            }
            if (utils.isNumber(code)) {
                res.statusCode = code;
            } else {
                throw new Error('The status code is required a number');
            }
        };
        rulee.header = function(name, value) {
            return (value === undefined) ? res.header(name) : res.header(name, value);
        };
        rulee.redirect = function(url, permanent) {
            return res.redirect(permanent ? 301 : 302, url);
        };
        rulee.download = function(filePath, fileDownloadName) {
            return res.download(filePath, fileDownloadName);
        };
        rulee.send = function(content, status) {
            return (status === undefined) ? res.send(content) : res.send(content, status);
        };
        //
        next(err);
    };
};
