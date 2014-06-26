/*
* mvcArea
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    events = require('events'),
    express = require('express'),
    utils = require('./utilities');

var router = express.Router();

module.exports = {

    events: new events.EventEmitter(),

    areasPath: utils.absPath('areas'),

    register: function(areaName) {
        var area, areaPath = path.join(this.areasPath, areaName);
        if (fs.statSync(areaPath).isDirectory()) {
            // read 'areas/account/controllers'
            var controllersPath = path.join(areaPath, 'controllers');
            if (fs.existsSync(controllersPath)) {
                // push
                var routes = [], controllerInstances = [];
                area = {
                    areaName: areaName,
                    areaPath: areaPath,
                    routes: routes,
                    controllers: controllerInstances
                };
                // read 'areas/account/controllers/logon.js'
                var controllers = fs.readdirSync(controllersPath);
                utils.each(controllers, function(i, controllerName) {
                    var controllerPath = path.join(controllersPath, controllerName);
                    if (fs.statSync(controllerPath).isFile()) {
                        // load controller
                        var instance = require(controllerPath);
                        controllerInstances.push(instance);
                        // load routes
                        routes.push(router.get(utils.format('/{0}/{1}/{2}', areaName, controllerName, )))
                    }
                });
                // emit
                this.events.emit('registerArea', area);
            }
        }
        // ret
        return area;
    },
    
    registerAll: function(app) {
        var areas = [], self = this;
        var areasDirs = fs.readdirSync(this.areasPath);
        utils.each(areasDirs, function(i, areaName) {
            var area = self.register(areaName);
            if (area) { 
                areas.push(area);
                utils.each(area.routes, function() {
                    app.use(this);
                });
            }
        });
        return areas;
    }
};