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

    var tryToLower = function(str) {
        if (!str) { return str };
        return str.toLowerCase();
    };

    var tryGetParam = function(params, name, index) {
        var found;
        utils.each(params, function() {
            if (tryToLower(this.name) === name) {
                found = this;
                return false;
            }
        });
        if (!found) {
            found = params[index];
        }
        return found;
    };

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
                var ctrlParam = tryGetParam(params, 'controller', 0);
                if (!ctrlParam) { return; }
                ctrlParam._is_path = true;
                //
                var ctrl = area.controllers[tryToLower(ctrlParam.value) || route.defaultValues[tryToLower(ctrlParam.name)]];
                if (!ctrl) { return; }
                //
                var actParam = tryGetParam(params, 'action', 1);
                if (!actParam) { return; }
                actParam._is_path = true;
                //
                ctrl.initialize(req, res);
                var actions = ctrl.actions();
                var act = actions[tryToLower(actParam.value) || route.defaultValues[tryToLower(actParam.name)]];
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
