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
    var values = {}, controllerParamName = 'controller', actionParamName = 'action';
    if (includeImplicitMvcValues && implicitRouteValues) {
        var controllerParam = findRouteValue(implicitRouteValues, controllerParamName, 0);
        if (controllerParam) {
            controllerParamName = controllerParam.name;
            values[controllerParamName] = controllerParam.value;
        }
        var actionParam = findRouteValue(implicitRouteValues, actionParamName, 1);
        if (actionParam) {
            actionParamName = actionParam.name;
            values[actionParamName] = actionParam.value;
        }
    }
    if (routeValues) {
        utils.each(routeValues, function(key, value) {
            values[key] = value;
        });
    }
    if (controllerName) {
        values[controllerParamName] = controllerName;
    }
    if (actionName) {
        values[actionParamName] = actionName;
    }
    return values;
};