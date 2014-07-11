/*
* mvcHandler
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var utils = require('./utilities'),
    mvcAreas = require('./mvcAreas'),
    mvcHelper = require('./mvcHelper'),
    mvcContext = require('./mvcContext');

module.exports = function(setts) {

    var ct = { 'Content-Type': 'text/plain' };
    var getParam = function(routeData, findName, defaultIndex) {
        if (findName === 'area') { defaultIndex = false; }
        return mvcHelper.findRouteItem(routeData, findName, defaultIndex);
    };

    // route core
    return function(req, res) {
        //
        var rulee  = {
            setting: setts,
            request: req.rulee,
            response: res.rulee
        };
        //
        var matched = false, exception;
        var gotoNext = function() {
            if (exception) {
                if (!(exception instanceof Error)) {
                    exception = new Error(exception);
                }
                res.writeHead(exception.status || 500, ct);
                res.end(exception.message);
            }
            else if (!matched) {
                res.writeHead(404, ct);
                res.end('Not Found');
            }
        };
        //
        var routeSet = mvcAreas.routeSet();
        utils.each(routeSet, function(n, route) {
            var routeData = route.routeData(rulee.request.url.pathname);
            if (!routeData) { return; } // continue
            //
            var area = mvcAreas.get(route.ownerAreaName);
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
                routeArea: area,
                routeSet: routeSet,
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
                var actionExecuted = false;
                action.executeImpl(function(obj) {
                    if (obj === undefined) { return; }
                    if (actionExecuted) { return; }
                    actionExecuted = true;
                    //
                    var resultExecuted = false;
                    action.executeResult(obj, function(error) {
                        if (resultExecuted) { return; }
                        resultExecuted = true;
                        controller.destroy();
                        exception = error;
                        gotoNext();
                    });
                });
            } catch (ex) {
                controller.destroy();
                exception = ex;
                return false; // break
            }
            //
            return false; // break
        });
        // next
        gotoNext();
    };
};
