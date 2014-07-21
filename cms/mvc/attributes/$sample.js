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


    /************ controller object events **************/
    onControllerInitialized: function(controller) {},
    onControllerDestroy: function(controller) {},


    /************ authorize event **************/
    onAuthorization: function(authorizationContext, next) {},


    /************ action filter events **************/
    onActionExecuting: function(actionContext, next) {},
    onActionExecuted: function(actionContext, next) {},
    onResultExecuting: function(resultContext, next) {},
    onResultExecuted: function(resultContext, next) {},


    /************ exception event **************/
    onException: function(exceptionContext, next) {},


    /************ action selector functions **************/
    isValidActionName: function(controllerContext, actionName, next) {},
    isValidActionRequest: function(controllerContext, next) {}
};
