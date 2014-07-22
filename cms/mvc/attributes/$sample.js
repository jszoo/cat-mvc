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
    onActionExecuting: function(actionContext, next) { next(); },
    onActionExecuted: function(actionContext, next) { next(); },
    onResultExecuting: function(resultContext, next) { next(); },
    onResultExecuted: function(resultContext, next) { next(); },


    /************ exception event **************/
    onException: function(exceptionContext) {},


    /************ action selector functions **************/
    isValidActionName: function(controllerContext, actionName) {},
    isValidActionRequest: function(controllerContext) {}
};
