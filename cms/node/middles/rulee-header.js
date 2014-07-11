/*
* ruleeHeader
* author: ronglin
* create date: 2014.7.11
*/

'use strict';

var utils = require('../utilities');

module.exports = function(set) {
    if (set = set || {}, !set.headers) {
        set.headers = { 'X-Powered-By': 'RULEE-MVC' };
    }
    //
    return function(req, res, next) {
        utils.each(set.headers, function(key, value) {
            res.setHeader(key, value);
        }); next();
    };
};
