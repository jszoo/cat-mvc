/*
* cache.notifyRemote
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var cache = require('./cache');
var utils = require('./utilities');
var config = require('./setting').load('/web.config').get('cacheNotify');

module.exports = function() {

    return function(req, res, next) {
        
        next();
    };
};
