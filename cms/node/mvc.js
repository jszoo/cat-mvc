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
    mvcMatcher = require('./mvcMatcher'),
    mvcController = require('./mvcController');


var mvcHandler = function(set) {

    var macher = mvcMatcher({
        sensitive: false,
        strict: false,
        end: false
    });

    var lower = function(str) {
        return mvcHelper.lower(str);
    };

    var getParam = function(params, findName, defaultIndex) {
        return mvcHelper.findRouteValue(params, findName, defaultIndex);
    };

    // route core
    return function(req, res, next) {
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
        var pathname = parse(req.url).pathname;
        //
        utils.each(allAreas, function(i, area) {
            if (matched || exception) { return false; }
            //
            utils.each(area.routes, function(k, route) {
                var match = macher(route.expression);
                var params = match(pathname);
                if (params === false) { return; }
                //
                var areaParam = getParam(params, 'area');
                if (!areaParam) {
                    params.unshift({
                        name: 'area',
                        value: area.name
                    });
                }
                //
                var ctrlParam = getParam(params, 'controller', 1);
                if (!ctrlParam) { return; }
                if (!ctrlParam.value) {
                    ctrlParam.value = route.defaultValues[lower(ctrlParam.name)];
                }
                //
                var ctrl = area.findController(ctrlParam.value);
                if (!ctrl) { return; }
                //
                var actParam = getParam(params, 'action', 2);
                if (!actParam) { return; }
                if (!actParam.value) {
                    actParam.value = route.defaultValues[lower(actParam.name)];
                }
                //
                try {
                    ctrl = ctrl.clone();
                    ctrl.initialize(req, res, route, mvcAreas.routeSet(), params);
                } catch (ex) {
                    ctrl.destroy();
                    exception = ex;
                    return false;
                }
                //
                var act = ctrl.findAction(actParam.value, req.method);
                if (!act) { 
                    ctrl.destroy();
                    return;
                }
                //
                try {
                    matched = true;
                    var resultSync = act.execute(function(result) {
                        if (!resultSync) {
                            exception = act.executeResult(result);
                            ctrl.destroy();
                            wrapNext();
                        }
                    });
                    if (resultSync) {
                        exception = act.executeResult(resultSync);
                        ctrl.destroy();
                        wrapNext();
                    }
                } catch (ex) {
                    ctrl.destroy();
                    exception = ex;
                    return false;
                }
                //
                return false;
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
