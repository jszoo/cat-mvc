/*
* handleErrorAttribute
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.21
*/

'use strict';

var utils = require('zoo-utils'),
    viewResult = require('../mvcActionResult').viewResult;

var handleErrorAttribute = module.exports = function(set) {
    if (utils.isBoolean(set)) {
        this.enabled = set;
    } else {
        utils.extend(this, set);
    }
};

handleErrorAttribute.prototype = {

    viewName: '_error', enabled: true,

    constructor: handleErrorAttribute,

    onException: function(exceptionContext) {
        if (this.enabled && !exceptionContext.exceptionHandled) {
            exceptionContext.exceptionHandled = true;
            exceptionContext.result = new viewResult({
                viewData: exceptionContext.exception,
                viewName: this.viewName,
            });
        }
    }

};
