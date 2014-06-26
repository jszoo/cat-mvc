/*
* areaRegistration
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs');
var events = require('events');
var utils = require('./utilities');

module.exports = {

    events: new events.EventEmitter(),
    
    registerAllAreas: function() {
        var areas = [];
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
                    // read 'areas/account/controllers/logon.js'
                    var controllers = fs.readdirSync(controllersPath);
                    utils.each(controllers, function(i, controllerName) {
                        var controllerPath = utils.absPath(controllersPath, controllerName);
                        if (fs.statSync(controllerPath).isFile()) {
                            // push
                            areas.push({
                                areaName: areaName,
                                areaPath: areaPath,
                                controllers: []
                            });
                        }
                    });
                }
            }
        });
    }
};