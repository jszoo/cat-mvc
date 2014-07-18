/*
* mvcHelper
* author: ronglin
* create date: 2014.7.1
*/

'use strict';

var utils = require('./utilities');

var findRouteItem = exports.findRouteItem = function(routeData, findName, defaultIndex) {
    var found; findName = utils.tryLower(findName);
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
        if (utils.tryLower(this.name) === findName) {
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
        var areaParam = findRouteItem(implicitRouteValues, areaParamName);
        if (areaParam) {
            areaParamName = areaParam.name;
            values[areaParamName] = areaParam.value;
        }
        var controllerParam = findRouteItem(implicitRouteValues, controllerParamName);
        if (controllerParam) {
            controllerParamName = controllerParam.name;
            values[controllerParamName] = controllerParam.value;
        }
        var actionParam = findRouteItem(implicitRouteValues, actionParamName);
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
    if (!areaName) { areaName = '/root'; }
    utils.each(routeSet, function(key, route) {
        if (utils.tryLowerEqual(route.ownerAreaName, areaName)) {
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
            url = route.resolveUrl(values);
        } else {
            throw new Error(utils.format('Can not find routeName: "{0}"', routeName));
        }
    } else {
        var areaName = values['area'], matchedCount = null, matchedRoute;
        var areaRoutes = filterRouteSetByArea(routeSet, areaName);
        utils.each(areaRoutes, function() {
            var count = this.matchedCount(values);
            if (matchedCount === null || count > matchedCount){
                matchedCount = count;
                matchedRoute = this;
            }
        });
        if (matchedRoute) {
            url = matchedRoute.resolveUrl(values);
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
