/*
* handleError
* author: ronglin
* create date: 2014.7.21
*/

'use strict';

var utils = require('../utilities');

var handleError = module.exports = function(set) {
    utils.extend(this, set);
};

handleError.prototype = {

    viewName: 'Error',

    constructor: handleError, className: 'handleError',

    onException: function(exceptionContext) {
        if (exceptionContext.exceptionHandled) {
            return;
        }
        exceptionContext.exceptionHandled = true;
        exceptionContext.result = new viewResult({
            viewData: exceptionContext.exception,
            viewName: this.viewName,
            statusCode: 500
        });
    }
    
};
