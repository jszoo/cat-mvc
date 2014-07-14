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

    onControllerInitialized: function(controller) {
    },

    onControllerDestroyed: function(controller) {
    },

    onControllerInjected: function(controller, injectedParams) {
    },


    onActionInitialized: function(action) {
    },

    onActionDestroyed: function(action) {
    },

    onActionInjected: function(action, injectedParams) {
    },


    onActionExecuting: function(actionContext) {
    },

    onActionExecuted: function(actionContext) {
    },


    onResultExecuting: function(resultContext) {
    },

    onResultExecuted: function(resultContext) {
    },


    isValidActionName: function(httpContext, actionName) {
    },

    isValidRequestMethod: function(httpContext, methodName) {
    },

    isValidRequestSecure: function(httpContext, isSecure) {
    }
};

module.exports = sample;
