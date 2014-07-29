/*
* validateInput
* author: ronglin
* create date: 2014.7.17
*/

'use strict';

var utils = require('../utilities');

var validateInput = module.exports = function(set) {
    if (utils.isBoolean(set)) {
        this.enableValidation = set;
    } else {
        utils.extend(this, set);
    }
};

validateInput.prototype = {

    enableValidation: false,

    constructor: validateInput, className: 'validateInput',

    onAuthorization: function(authorizationContext) {
        authorizationContext.controller.validateRequest = !!this.enableValidation;
    }
};
