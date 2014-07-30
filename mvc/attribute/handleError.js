/*
* handleError
* author: ruleechen 
* contact: rulee@live.cn
* create date: 2014.7.21
*/

'use strict';

var utils = require('../utilities'),
    viewResult = require('../mvcActionResult').viewResult;

var handleError = module.exports = function(set) {
    utils.extend(this, set);
};

handleError.prototype = {

    viewName: '_error',

    constructor: handleError, className: 'handleError',

    onException: function(exceptionContext) {
        if (!exceptionContext.exceptionHandled) {
            exceptionContext.exceptionHandled = true;
            exceptionContext.result = new viewResult({
                viewData: exceptionContext.exception,
                viewName: this.viewName,
            });
        }
    }

};
