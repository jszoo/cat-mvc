/*
* nonActionAttribute
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.22
*/

'use strict';

var utils = require('zoo-utils');

var nonActionAttribute = module.exports = function() {};

nonActionAttribute.prototype = {

    constructor: nonActionAttribute,

    isValidActionName: function(httpContext, actionName) {
        return false;
    }

};
