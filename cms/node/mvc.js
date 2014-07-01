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
    mvcMatcher = require('./mvcMatcher'),
    mvcController = require('./mvcController');


var mvcHandler = function(set) {

    var macher = mvcMatcher({
        sensitive: false,
        strict: false,
        end: false
    });

    //
    return function(req, res, next) {
        var pathname = parse(req.url).pathname;
        var matched = false, allAreas = mvcAreas.all();
        utils.each(allAreas, function(i, area) {
            if (matched) { return false; }
            utils.each(area.routes, function(k, route) {
                var match = macher(route.expression);
                var params = match(pathname);
                if (params === false) { return; }
                //
                var ctrlParam = params[0];
                if (!ctrlParam) { return; }
                //
                var ctrl = area.controllers[ctrlParam.value || route.defaultValues[ctrlParam.name]];
                if (!ctrl) { return; }
                //
                var actParam = params[1];
                if (!actParam) { return; }
                //
                ctrl.initialize(req, res);
                var actions = ctrl.actions();
                var act = actions[actParam.value || route.defaultValues[actParam.name]];
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
