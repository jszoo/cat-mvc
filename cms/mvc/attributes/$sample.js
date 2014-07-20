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
    onControllerInjected: function(controller, injectedParams) {},
    onControllerInitialized: function(controller) {},
    onControllerDestroy: function(controller) {},


    /************ action implementation events **************/
    onActionAuthorize: function(authorizeContext) {},
    onActionInjected: function(controllerContext, injectedParams) {},
    onActionExecuting: function(actionContext) {},
    onActionExecuted: function(actionContext) {},
    onActionException: function(exceptionContext) {},


    /************ action result events **************/
    onResultExecuting: function(resultContext) {},
    onResultExecuted: function(resultContext) {},


    /************ action selector functions **************/
    isValidActionName: function(controllerContext, actionName) {},
    isValidActionRequest: function(controllerContext) {}
};
