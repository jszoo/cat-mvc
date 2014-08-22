/*
* sampleAttribute
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.12
*/

'use strict';

var utils = require('zoo-utils');

var sampleAttribute = module.exports = function(set) {
    utils.extend(this, set);
};

sampleAttribute.prototype = {

    constructor: sampleAttribute,

    /************ controller events **************/
    onControllerInitialized: function(controller) { },
    onControllerDestroy: function(controller) { },

    /************ authorize event **************/
    onAuthorization: function(authorizationContext) { },

    /************ action filter events **************/
    onActionExecuting: function(actionExecutingContext, next) { next(); },
    onActionExecuted: function(actionExecutedContext, next) { next(); },
    onResultExecuting: function(resultExecutingContext, next) { next(); },
    onResultExecuted: function(resultExecutedContext, next) { next(); },

    /************ exception event **************/
    onException: function(exceptionContext) { },



    

    /************ action name selector interface **************/
    isValidActionName: function(controllerContext, actionName) { },

    /************ action method selector interface **************/
    isValidActionRequest: function(controllerContext) { },

    /************ model binder interface **************/
    getBinder: function() { }
};
