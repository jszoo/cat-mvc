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
        var pathname = parse(req.url).pathname;
        //
        var allAreas = mvcAreas.all();
        req.routeSet = mvcAreas.routeSet();
        //
        utils.each(allAreas, function(i, area) {
            if (matched) { return false; }
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
                    req.routeData = params;
                    ctrl.initialize(req, res);
                } catch (ex) {
                    exception = ex;
                    return false;
                }
                //
                var act = ctrl.findAction(actParam.value, req.method);
                if (!act) { return; }
                //
                try {
                    var result = act.execute(req, res);
                    exception = act.executeResult(req, res, result);
                } catch (ex) {
                    exception = ex;
                    return false;
                }
                //
                matched = true;
                return false;
            });
        });
        //
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
};

module.exports = {
    view: mvcView,
    areas: mvcAreas,
    handler: mvcHandler,
    controller: mvcController.define
};
