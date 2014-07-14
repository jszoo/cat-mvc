/*
* sample
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities');

var sample = function(set) {
    utils.extend(this, set);
};

sample.prototype = {

    constructor: sample, className: 'sample',


    /************ controller object events **************/
    onControllerInitialized: function(controller) {},
    onControllerDestroyed: function(controller) {},
    onControllerInjected: function(controller, injectedParams) {},


    /************ action object events **************/
    onActionInitialized: function(action) {},
    onActionDestroyed: function(action) {},
    onActionInjected: function(action, injectedParams) {},


    /************ action implementation events **************/
    onActionExecuting: function(actionContext) {},
    onActionExecuted: function(actionContext) {},


    /************ action result events **************/
    onResultExecuting: function(resultContext) {},
    onResultExecuted: function(resultContext) {},


    /************ action selector functions **************/
    isValidActionName: function(controllerContext, actionName) {},
    isValidRequestMethod: function(controllerContext, methodName) {},
    isValidRequestSecure: function(controllerContext, isSecure) {}
};

module.exports = sample;
