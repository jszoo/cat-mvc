/*
* validateInputAttribute
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.17
*/

'use strict';

var utils = require('zoo-utils');

var validateInputAttribute = module.exports = function(set) {
    if (utils.isBoolean(set)) {
        this.enableValidation = set;
    } else {
        utils.extend(this, set);
    }
};

validateInputAttribute.prototype = {

    enableValidation: false,

    constructor: validateInputAttribute,

    onAuthorization: function(authorizationContext) {
        authorizationContext.controller.validateRequest = !!this.enableValidation;
    }
};
