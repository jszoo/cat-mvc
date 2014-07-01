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

    var lower = function(str) {
        if (!str) { return str };
        return str.toLowerCase();
    };

    var getParam = function(params, findName, defaultIndex) {
        var found; findName = lower(findName);
        utils.each(params, function() {
            if (lower(this.name) === findName) {
                found = this;
                return false;
            }
        });
        if (!found) {
            found = params[defaultIndex];
        }
        return found;
    };

    // route core
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
                var ctrlParam = getParam(params, 'controller', 0);
                if (!ctrlParam) { return; }
                ctrlParam._is_path = true;
                //
                var ctrl = area.controllers[lower(ctrlParam.value || route.defaultValues[lower(ctrlParam.name)])];
                if (!ctrl) { return; }
                //
                var actParam = getParam(params, 'action', 1);
                if (!actParam) { return; }
                actParam._is_path = true;
                //
                ctrl.initialize(req, res);
                var act = ctrl.actions[lower(actParam.value || route.defaultValues[lower(actParam.name)])];
                if (!act) { return; }
                //
                utils.each(params, function() {
                    if (!this._is_path && !(this.name in req.query)) {
                        req.query[this.name] = this.value;
                    }
                });
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
