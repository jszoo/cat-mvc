/*
* actionNameAttribute
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.12
*/

'use strict';

var utils = require('zoo-utils');

var actionNameAttribute = module.exports = function(set) {
    if (utils.isString(set)) {
        this.name = set;
    } else {
        utils.extend(this, set);
    }
    if (!this.name) {
        throw new Error('The action name of actionNameAttribute is required');
    }
};

actionNameAttribute.prototype = {

    name: null,

    constructor: actionNameAttribute,

    isValidActionName: function(httpContext, actionName) {
        return utils.tryLowerEqual(this.name, actionName);
    }

};
