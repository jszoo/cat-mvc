/*
* mvc
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var parse = require('url').parse,
    utils = require('./utilities'),
    mvcView = require('./mvcView'),
    mvcAreas = require('./mvcAreas'),
    mvcHelper = require('./mvcHelper'),
    mvcController = require('./mvcController'),
    mvcMiddleware = require('./mvcMiddleware');


var mvcHandler = function(set) {

    var getParam = function(routeData, findName, defaultIndex) {
        return mvcHelper.findRouteValue(routeData, findName, defaultIndex);
    };

    var decode = function(param) {
        if (!param) {
            return param;
        }
        try {
            return decodeURIComponent(param);
        } catch (ex) {
            var err = new Error('failed to decode param "' + param + '"');
            err.status = 400;
            throw err;
        }
    };

    // route core
    return function(req, res, next) {
        //
        mvcMiddleware.xHeaders().handle(req, res);
        mvcMiddleware.ruleeUrl().handle(req, res);
        mvcMiddleware.ruleeForm().handle(req, res);
        mvcMiddleware.ruleeQuery().handle(req, res);
        mvcMiddleware.ruleeMethod().handle(req, res);
        mvcMiddleware.ruleeSecure().handle(req, res);
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
        var pathName = parse(req.url).pathname;
        //
        utils.each(allAreas, function(i, area) {
            if (matched || exception) { return false; } // break
            //
            utils.each(area.routes.all(), function(k, route) {
                var match = route.regexp.exec(pathName);
                if (!match) { return; } // continue
                //
                var routeData = [];
                utils.each(route.keys, function(i, it) {
                    var val = decode(match[i + 1]);
                    if (!val) {
                        var lowerName = it.name.toLowerCase();
                        if (lowerName in route.defaultValues) {
                            val = route.defaultValues[lowerName];
                        }
                    }
                    routeData.push({
                        name: it.name,
                        value: val
                    });
                });
                //
                var areaParam = getParam(routeData, 'area');
                if (!areaParam) {
                    routeData.unshift({
                        name: 'area',
                        value: area.name
                    });
                }
                //
                var controllerParam = getParam(routeData, 'controller', 1);
                if (!controllerParam) { return; } // continue
                //
                var controller = area.findController(controllerParam.value);
                if (!controller) { return; } // continue
                //
                var actionParam = getParam(routeData, 'action', 2);
                if (!actionParam) { return; } // continue
                //
                try {
                    controller = controller.clone();
                    controller.initialize(req, res, route, mvcAreas.routeSet(), routeData);
                    controller.executeImpl();
                } catch (ex) {
                    controller.destroy();
                    exception = ex;
                    return false; // break
                }
                //
                var action = controller.findAction(actionParam.value, req.method, req.secure);
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
