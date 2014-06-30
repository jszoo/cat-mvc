/*
* mvc
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var pathMatch = require('path-match'),
    parse = require('url').parse,
    utils = require('./utilities'),
    mvcAreas = require('./mvcAreas'),
    mvcController = require('./mvcController');


var mvcHandler = function(set) {

    var macher = pathMatch({
        sensitive: false,
        strict: false,
        end: false
    });

    //
    return function(req, res, next) {
        var pathname = parse(req.url).pathname;
        var allAreas = mvcAreas.all(), matched = false;
        utils.each(allAreas, function(i, area) {
            utils.each(area.routes, function(k, route) {
                var match = macher(route.expression);
                var params = match(pathname);
                if (params !== false) {
                    utils.each(params, function(key, val) {
                        params[key] = val.toLowerCase();
                    });
                    var ctrl = area.controllers[params.controller];
                    if (ctrl) {
                        ctrl.initialize(req, res);
                        var actions = ctrl.actions();
                        var act = actions[params.action];
                        if (act) {
                            debugger;
                            act.execute(req, res);
                            matched = true;
                        }
                    }
                }
            });
        });
        if (!matched) {
            next();
        }
    };
};

module.exports = {
    areas: mvcAreas,
    handler: mvcHandler,
    controller: mvcController.define
};
