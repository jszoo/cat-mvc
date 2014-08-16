/*
* mvcHandler
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.24
*/

'use strict';

var utils = require('zoo-utils'),
    mvcHelper = require('./mvcHelper'),
    mvcContext = require('./mvcContext');

module.exports = function(app) {

    var getParam = function(routeData, findName, defaultIndex) {
        if (findName === 'area') { defaultIndex = false; }
        return mvcHelper.findRouteItem(routeData, findName, defaultIndex);
    };

    // route core
    return function(req, res, next) {
        //
        var zoo = {
            request: req._zoo,
            response: res._zoo
        };
        //
        var matched = false, exception;
        var gotoNext = function() {
            if (exception) {
                next(exception);
            } else if (!matched) {
                var notfound = new Error('The requested URL was not found on this server');
                notfound.status = 404;
                next(notfound);
            }
        };
        //
        var routeSet = app.areas.routeSet();
        utils.each(routeSet, function(n, route) {
            var controller;
            try {
                var routeData = route.routeData(zoo.request.url.pathname);
                if (!routeData) { return; } // continue
                //
                var area = app.areas.get(route.ownerAreaName);
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
                controller = area.findController(controllerParam.value);
                if (!controller) { return; } // continue
                //
                var actionParam = getParam(routeData, 'action');
                if (!actionParam) { return; } // continue
                //
                var httpContext = new mvcContext({
                    id: utils.unique(32),
                    items: {},
                    app: app,
                    zoo: zoo,
                    req: req,
                    res: res,
                    route: route,
                    routeData: routeData,
                    routeArea: area,
                    routeSet: routeSet
                });
                controller = controller.clone();
                controller.initialize(httpContext);
                controller.executeImpl();
                //
                var action = controller.findAction(actionParam.value);
                if (!action) {
                    controller.destroy();
                    return; // continue
                } else {
                    matched = true;
                }
                //
                action.executeImpl(function(err) {
                    controller.destroy();
                    exception = err;
                    gotoNext();
                });
                //
                return false; // break
            }
            catch (ex) {
                controller && controller.destroy();
                exception = ex;
                return false; // break
            }
        });
        // next
        gotoNext();
    };
};
