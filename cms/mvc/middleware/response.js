/*
* response
* author: ronglin
* create date: 2014.7.4
*/

'use strict';

module.exports = function() {
    //
    return function(req, res, next, err) {
        var rulee = res.rulee || (res.rulee = {});
        //
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
