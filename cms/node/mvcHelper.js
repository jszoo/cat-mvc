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
    utils.each(routeSet, function(key, route) {
        if (lowerEqual(route.ownerAreaName, areaName)) {
            routes.push(route);
        }
    });
    return routes;
};

var generateRouteUrl = function(route, values) {
    var query = utils.extend({}, values);
    var parts = route.expression.split('/');
    var matchCount = 0;
    utils.each(parts, function(i, part) {
        if (!part || part.charAt(0) !== ':') { return; }
        utils.each(route.keys, function() {
            if (part.indexOf(':' + this.name) === 0) {
                var fname = utils.formalStr(this.name);
                parts[i] = values[fname] || route.defaultValues[fname];
                if (fname in query) {
                    delete query[fname];
                    matchCount++;
                }
                return false;
            }
        });
    });
    delete query['area'];
    return {
        matchCount: matchCount,
        url: utils.appendQuery(parts.join('/'), query)
    };
};

var generateUrl = exports.generateUrl = function(routeName, actionName, controllerName, routeValues, routeSet, httpContext, includeImplicitMvcValues) {
    var url, values = mergeRouteValues(actionName, controllerName, httpContext.routeData, routeValues, includeImplicitMvcValues);
    var formalValues = {};
    utils.each(values, function(key, val) {
        formalValues[utils.formalStr(key)] = val;
    });
    if (routeName) {
        var route = routeSet[utils.formalStr(routeName)];
        if (!route) {
            throw new Error(utils.format('Can not find routeName: "{0}"', routeName));
        } else {
            url = generateRouteUrl(route, formalValues).url;
        }
    } else {
        var areaName = formalValues['area'], matchCount;
        var areaRoutes = filterRouteSetByArea(routeSet, areaName);
        utils.each(areaRoutes, function() {
            var ret = generateRouteUrl(this, formalValues);
            if (matchCount === undefined || ret.matchCount >  matchCount) {
                matchCount = ret.matchCount;
                url = ret.url;
            }
        });
    }
    return url;
};

var generateUrlPlus = exports.generateUrlPlus = function(routeName, actionName, controllerName, protocol, hostName, fragment, routeValues, routeSet, httpContext, includeImplicitMvcValues) {
    var text = generateUrl(routeName, actionName, controllerName, routeValues, routeSet, httpContext, includeImplicitMvcValues);
    if (text) {
        if (fragment) {
            text = text + '#' + fragment;
        }
        if (protocol || hostName) {
            protocol = protocol ? protocol : 'http:';
            hostName = hostName ? hostName : httpContext.request.url.host;
            text = protocol + '//' + hostName + port + text;
            //TODO: use req.rulee.url?
        }
    }
    return text;
};

var generateContentUrl = exports.generateContentUrl = function(contentPath, httpContext) {
    if (contentPath && contentPath.charAt(0) === '~') {
        return contentPath.substr(1);
    } else {
        return contentPath;
    }
};
