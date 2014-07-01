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
        var matched = false;
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
                var ctrlParam = getParam(params, 'controller', 0);
                if (!ctrlParam) { return; }
                //
                var ctrl = area.controllers[lower(ctrlParam.value || route.defaultValues[lower(ctrlParam.name)])];
                if (!ctrl) { return; }
                //
                var actParam = getParam(params, 'action', 1);
                if (!actParam) { return; }
                //
                req.routeData = params;
                ctrl.initialize(req, res);
                //
                var act = ctrl.actions[lower(actParam.value || route.defaultValues[lower(actParam.name)])];
                if (!act) { return; }
                //
                act.execute(req, res);
                matched = true;
                return false;
            });
        });
        if (!matched) {
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
