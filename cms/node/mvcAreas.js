/*
* mvcArea
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs'),
    events = require('events'),
    express = require('express'),
    utils = require('./utilities');

var router = express.Router();

module.exports = {

    events: new events.EventEmitter(),

    register: function(areaName) {
        //TODO:
    },
    
    registerAll: function(app) {
        var areas = [], self = this;
        // read: 'areas'
        var areasPath = utils.absPath('areas');
        var areasDirs = fs.readdirSync(areasPath);
        // read: 'areas/account'
        utils.each(areasDirs, function(i, areaName) {
            var areaPath = utils.absPath('areas', areaName);
            if (fs.statSync(areaPath).isDirectory()) {
                // read 'areas/account/controllers'
                var controllersPath = utils.absPath(areaPath, 'controllers');
                if (fs.existsSync(controllersPath)) {
                    // push
                    var areaInstance, routes = [], controllerInstances = [];
                    areas.push(areaInstance = {
                        areaName: areaName,
                        areaPath: areaPath,
                        routes: routes,
                        controllers: controllerInstances
                    });
                    // read 'areas/account/controllers/logon.js'
                    var controllers = fs.readdirSync(controllersPath);
                    utils.each(controllers, function(i, controllerName) {
                        var controllerPath = utils.absPath(controllersPath, controllerName);
                        if (fs.statSync(controllerPath).isFile()) {
                            // load controller
                            var instance = require(controllerPath);
                            controllerInstances.push(instance);
                            // load routes
                            routes.push(router.get(utils.format('/{0}/{1}/{2}', areaName, controllerName, )))
                        }
                    });
                    // emit
                    self.events.emit('registerArea', areaInstance);
                }
            }
        });
        //
        utils.each(areas, function() {
            utils.each(this.routes, function() {
                app.use(this);
            });
        });
        //
        return areas;
    }
};