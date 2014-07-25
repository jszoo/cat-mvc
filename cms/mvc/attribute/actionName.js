/*
* actionName
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities');

var actionName = module.exports = function(set) {
    if (utils.isString(set)) {
        this.name = set;
    } else {
        utils.extend(this, set);
    }
    if (!this.name) {
        throw new Error('The action name of actionName attribute is required');
    }
};

actionName.prototype = {

    name: null,

    constructor: actionName, className: 'actionName',

    isValidActionName: function(httpContext, actionName) {
        return utils.tryLowerEqual(this.name, actionName);
    }

};
