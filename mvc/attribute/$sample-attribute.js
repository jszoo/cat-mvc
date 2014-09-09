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

    /************ controller events interface **************/
    onControllerInitialized: function(controller) { },
    onControllerDestroy: function(controller) { },

    /************ authorization filter interface [IAuthorizationFilter] **************/
    onAuthorization: function(authorizationContext) { },

    /************ action filter interface [ActionFilterAttribute + IActionFilter] **************/
    onActionExecuting: function(actionExecutingContext, next) { next(); },
    onActionExecuted: function(actionExecutedContext, next) { next(); },

    /************ result filter interface [ActionFilterAttribute + IResultFilter] **************/
    onResultExecuting: function(resultExecutingContext, next) { next(); },
    onResultExecuted: function(resultExecutedContext, next) { next(); },

    /************ exception filter interface [IExceptionFilter] **************/
    onException: function(exceptionContext) { },

    /************ action name selector interface [ActionNameSelectorAttribute] **************/
    isValidActionName: function(controllerContext, actionName) { },

    /************ action method selector interface [ActionMethodSelectorAttribute] **************/
    isValidActionRequest: function(controllerContext) { },

    /************ model binder interface [CustomModelBinderAttribute] **************/
    getParamName: function() { },
    getBinder: function() { }
};
