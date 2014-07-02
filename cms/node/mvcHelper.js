/*
* mvcHelper
* author: ronglin
* create date: 2014.7.1
*/

'use strict';

var utils = require('./utilities');

var lower = exports.lower = function(str) {
    if (!str) { return str };
    return str.toLowerCase();
};

var findRouteValue = exports.findRouteValue = function(routeData, findName, defaultIndex) {
    var found; findName = lower(findName);
    utils.each(routeData, function() {
        if (lower(this.name) === findName) {
            found = this;
            return false;
        }
    });
    if (!found && utils.isNumber(defaultIndex)) {
        found = routeData[defaultIndex];
    }
    return found;
};

var mergeRouteValues = exports.mergeRouteValues = function(actionName, controllerName, implicitRouteValues, routeValues, includeImplicitMvcValues) {
    var values = {}, areaParamName = 'area', controllerParamName = 'controller', actionParamName = 'action';
    if (includeImplicitMvcValues && implicitRouteValues) {
        var areaParam = findRouteValue(implicitRouteValues, areaParamName, 0);
        if (areaParam) {
            areaParamName = areaParam.name;
            values[areaParamName] = areaParam.value;
        }
        var controllerParam = findRouteValue(implicitRouteValues, controllerParamName, 1);
        if (controllerParam) {
            controllerParamName = controllerParam.name;
            values[controllerParamName] = controllerParam.value;
        }
        var actionParam = findRouteValue(implicitRouteValues, actionParamName, 2);
        if (actionParam) {
            actionParamName = actionParam.name;
            values[actionParamName] = actionParam.value;
        }
    }
    //
    if (routeValues) {
        utils.each(routeValues, function(key, value) {
            values[key] = value;
        });
    }
    //
    var areaName = null;
    if (areaName) {
        values[areaParamName] = areaName;
    }
    if (controllerName) {
        values[controllerParamName] = controllerName;
    }
    if (actionName) {
        values[actionParamName] = actionName;
    }
    // ret
    return values;
};

var generateUrl = exports.generateUrl = function(actionName, controllerName, routeValues, routeSet, request, includeImplicitMvcValues) {
    var values = mvcHelper.mergeRouteValues(actionName, controllerName, request.routeData, routeValues, includeImplicitMvcValues);
};

var generateUrlPlus = exports.generateUrlPlus = function(actionName, controllerName, protocol, hostName, fragment, routeValues, routeSet, request, includeImplicitMvcValues) {
    //TODO:
};

var generateContentUrl = exports.generateContentUrl = function(contentPath, httpContext) {
    //TODO:
};
