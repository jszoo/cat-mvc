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

var lowerEqual = exports.lowerEqual = function(str1, str2) {
    return lower(str1) == lower(str2);
};

var findRouteValue = exports.findRouteValue = function(routeData, findName, defaultIndex) {
    var found; findName = lower(findName);
    if (!utils.isNumber(defaultIndex) && defaultIndex !== false) {
        if (findName === 'area') {
            defaultIndex = 0;
        } else if (findName === 'controller') {
            defaultIndex = 1;
        } else if (findName === 'action') {
            defaultIndex = 2;
        }
    }
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

var filterRouteSetByArea = function(routeSet, areaName) {
    var routes = [];
    if (!areaName) { areaName = '*root'; }
    utils.each(routeSet, function(key, route) {
        if (lowerEqual(route.ownerAreaName, areaName)) {
            routes.push(route);
        }
    });
    return routes;
};

var generateUrl = exports.generateUrl = function(routeName, actionName, controllerName, routeValues, routeSet, httpContext, includeImplicitMvcValues) {
    var url, values = mergeRouteValues(actionName, controllerName, httpContext.routeData, routeValues, includeImplicitMvcValues);
    if (routeName) {
        var route = routeSet[utils.formalStr(routeName)];
        if (route) {
            url = route.resolveUrl(routeValues);
        } else {
            throw new Error(utils.format('Can not find routeName: "{0}"', routeName));
        }
    } else {
        var areaName = routeValues['area'], matchedCount = null, matchedRoute;
        var areaRoutes = filterRouteSetByArea(routeSet, areaName);
        utils.each(areaRoutes, function() {
            var count = this.matchedCount(routeValues);
            if (matchedCount === null || count > matchedCount){
                matchedCount = count;
                matchedRoute = this;
            }
        });
        if (matchedRoute) {
            url = matchedRoute.resolveUrl(routeValues);
        } else {
            throw new Error(utils.format('Can not find any routes in area: "{0}"', areaName));
        }
    }
    return url;
};

var generateUrlPlus = exports.generateUrlPlus = function(routeName, actionName, controllerName, protocol, hostName, fragment, routeValues, routeSet, httpContext, includeImplicitMvcValues) {
    var urlPath = generateUrl(routeName, actionName, controllerName, routeValues, routeSet, httpContext, includeImplicitMvcValues);
    if (urlPath) {
        if (fragment) {
            urlPath = urlPath + '#' + fragment;
        }
        if (protocol || hostName) {
            var url = httpContext.rulee.request.url;
            protocol = protocol ? protocol : url.protocol; // http:
            hostName = hostName ? hostName : url.host;     // localhost:8000
            urlPath = protocol + '//' + hostName + urlPath;
        }
    }
    return urlPath;
};

var generateContentUrl = exports.generateContentUrl = function(contentPath, httpContext) {
    if (contentPath && contentPath.charAt(0) === '~') {
        return contentPath.substr(1);
    } else {
        return contentPath;
    }
};
