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

    isRequestSupport: function(httpContext) {
    },

    isValidActionName: function(httpContext, actionName) {
    },

    isValidRequestMethod: function(httpContext) {
    },

    onActionExecuting: function(actionContext) {
    },

    onActionExecuted: function(actionContext) {
    },

    onResultExecuting: function(resultContext) {
    },

    onResultExecuted: function(resultContext) {
    }
};

module.exports = sample;
