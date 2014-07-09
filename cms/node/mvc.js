/*
* mvc
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var utils = require('./utilities'),
    mvcView = require('./mvcView'),
    mvcAreas = require('./mvcAreas'),
    mvcHelper = require('./mvcHelper'),
    mvcContext = require('./mvcContext'),
    mvcController = require('./mvcController'),
    mvcMiddleware = require('./mvcMiddleware');


var mvcHandler = function(set) {

    var getParam = function(routeData, findName, defaultIndex) {
        if (findName === 'area') { defaultIndex = false; }
        return mvcHelper.findRouteValue(routeData, findName, defaultIndex);
    };

    // route core
    return function(req, res, next) {
        //
        var rulee  = {
            headers: mvcMiddleware.ruleeHeaders().handle(req, res),
            request: mvcMiddleware.ruleeRequest().handle(req, res),
            response: mvcMiddleware.ruleeResponse().handle(req, res)
        };
        //
        var matched = false, exception;
        var wrapNext = function() {
            if (exception) {
                if (!(exception instanceof Error)) {
                    exception = new Error(exception);
                }
                next(exception);
            }
            else if (!matched) {
                next();
            }
        };
        //
        var allAreas = mvcAreas.all();
        utils.each(allAreas, function(i, area) {
            if (matched || exception) { return false; } // break
            //
            utils.each(area.ownedRoutes(), function(k, route) {
                var routeData = route.routeData(rulee.request.url.pathname);
                if (!routeData) { return; } // continue
                //
                var areaParam = getParam(routeData, 'area');
                if (!areaParam) {
                    routeData.unshift({
                        name: 'area',
                        value: area.name
                    });
                }
                //
                var controllerParam = getParam(routeData, 'controller');
                if (!controllerParam) { return; } // continue
                //
                var controller = area.findController(controllerParam.value);
                if (!controller) { return; } // continue
                //
                var actionParam = getParam(routeData, 'action');
                if (!actionParam) { return; } // continue
                //
                var httpContext = new mvcContext({
                    request: req,
                    response: res,
                    route: route,
                    routeData: routeData,
                    routeSet: mvcAreas.routeSet(),
                    rulee: rulee
                });
                try {
                    controller = controller.clone();
                    controller.initialize(httpContext);
                    controller.executeImpl();
                } catch (ex) {
                    controller.destroy();
                    exception = ex;
                    return false; // break
                }
                //
                var action = controller.findAction(actionParam.value, rulee.request.method, rulee.request.secure);
                if (!action) { 
                    controller.destroy();
                    return; // continue
                }
                //
                try {
                    matched = true;
                    var executeResult = function(obj) {
                        if (obj !== undefined && obj !== null) {
                            executeResult = function(obj) { };
                            exception = action.executeResult(obj);
                            controller.destroy();
                            wrapNext();
                        }
                    };
                    executeResult(action.executeImpl(function(result) {
                        executeResult(result);
                    }));
                } catch (ex) {
                    controller.destroy();
                    exception = ex;
                    return false; // break
                }
                //
                return false; // break
            });
        });
        // next
        wrapNext();
    };
};

var httpRawHandler = function(set) {
    var inner = mvcHandler(set), ct = { 'Content-Type': 'text/plain' };
    return function(req, res) {
        inner(req, res, function(err) {
            if (err) {
                res.writeHead(err.status || 500, ct);
                res.end(err.message);
            } else {
                res.writeHead(404, ct);
                res.end('Not Found');
            }
        });
    };
};

var expressHandler = function(set) {
    var inner = mvcHandler(set);
    return function(req, res, next) {
        inner(req, res, next);
    };
};

module.exports = {
    view: mvcView,
    areas: mvcAreas,
    controller: mvcController.define,
    //
    httpRawHandler: httpRawHandler,
    expressHandler: expressHandler
};
