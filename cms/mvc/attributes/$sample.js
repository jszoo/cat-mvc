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
    onAuthorization: function(authorizationContext) {},


    /************ action filter events **************/
    onActionExecuting: function(actionContext) {},
    onActionExecuted: function(actionContext) {},
    onResultExecuting: function(resultContext) {},
    onResultExecuted: function(resultContext) {},


    /************ exception event **************/
    onException: function(exceptionContext) {},


    /************ action selector functions **************/
    isValidActionName: function(controllerContext, actionName) {},
    isValidActionRequest: function(controllerContext) {}
};
