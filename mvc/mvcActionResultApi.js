/*
* mvcActionResultApi
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.3
*/

'use strict';

var utils = require('zoo-utils'),
    mvcHelper = require('./mvcHelper'),
    actionResult = require('./mvcActionResult');

var mvcActionResultApi = module.exports = function(set) {
    utils.extend(this, set);
};

var emit = function(result) {
    if (this.sync) {
        return result;
    }
    if (utils.isFunction(this.callback)) {
        utils.defer(this.callback, result);
    }
};

mvcActionResultApi.prototype = {

    httpContext: null, sync: false, callback: null,

    constructor: mvcActionResultApi,

    with: function(result) {
        return emit.call(this, result);
    }
};
