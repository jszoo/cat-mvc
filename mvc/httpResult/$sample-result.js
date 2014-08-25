/*
* sampleResult
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.25
*/

'use strict';

var utils = require('zoo-utils');

var sampleResult = module.exports = function(set) {
    utils.extend(this, set);
};

sampleResult.prototype = {

    constructor: sampleResult,

    executeResult: function(controllerContext, callback) {
        //TODO: customize logic
        // call callback when done
    }
};
