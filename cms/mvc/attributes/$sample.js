/*
* sample
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities');

var sample = module.exports = function(set) {
    utils.extend(this, set);
};

sample.prototype = {

    constructor: sample, className: 'sample',

    /************ controller events **************/
    onControllerInitialized: function(controller) {},
    onControllerDestroy: function(controller) {},

    /************ authorize event **************/
    onAuthorization: function(authorizationContext) {},

    /************ action filter events **************/
    onActionExecuting: function(actionExecutingContext, next) { next(); },
    onActionExecuted: function(actionExecutedContext, next) { next(); },
    onResultExecuting: function(resultExecutingContext, next) { next(); },
    onResultExecuted: function(resultExecutedContext, next) { next(); },

    /************ exception event **************/
    onException: function(exceptionContext) {},

    /************ action selector functions **************/
    isValidActionName: function(controllerContext, actionName) {},
    isValidActionRequest: function(controllerContext) {}
};
