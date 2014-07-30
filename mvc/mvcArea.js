/*
* mvcArea
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var utils = require('./utilities'),
    mvcAreaEvents = require('./mvcAreaEvents'),
    mvcAreaRoutes = require('./mvcAreaRoutes'),
    mvcControllers = require('./mvcControllers');

var mvcArea = module.exports = function(set, store) {
    utils.extend(this, set);
    if (!this.name) { throw new Error('Parameter "name" is required'); }
    //
    this.routes = new mvcAreaRoutes({ ownerAreaName: this.name }, store);
    this.subevents = new mvcAreaEvents({ ownerAreaName: this.name }, store);
    this.controllers = new mvcControllers({ ownerAreaName: this.name }, store);
};

mvcArea.prototype = {

    name: null, path: null, viewsPath: null, viewsSharedPath: null, controllersPath: null, eventsFilePath: null,

    routes: null, subevents: null, controllers: null,

    constructor: mvcArea, className: 'mvcArea',

    ownedRoutes: function() {
        return this.routes.all();
    },

    findController: function(controllerName) {
        return this.controllers.get(controllerName);
    },

    fireEvent: function(funcName) {
        var self = this;
        utils.each(this.subevents.all(), function(k, sub) {
            if (sub && utils.isFunction(sub[funcName])) {
                sub[funcName](self);
            }
        });
        return this;
    }
};
