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
    onControllerInjected: function(controller, injectedParams) {},
    onControllerDestroy: function(controller) {},


    /************ action object events **************/
    onActionInitialized: function(action) {},
    onActionInjected: function(action, injectedParams) {},
    onActionDestroy: function(action) {},


    /************ action implementation events **************/
    onActionExecuting: function(actionContext) {},
    onActionExecuted: function(actionContext) {},


    /************ action result events **************/
    onResultExecuting: function(resultContext) {},
    onResultExecuted: function(resultContext) {},


    /************ action selector functions **************/
    isValidActionName: function(controllerContext, actionName) {},
    isValidActionRequest: function(controllerContext) {}
};

module.exports = sample;
