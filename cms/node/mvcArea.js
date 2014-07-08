/*
* mvcArea
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var utils = require('./utilities'),
    mvcRoutes = require('./mvcRoutes'),
    mvcAreaSubs = require('./mvcAreaSubs'),
    mvcControllers = require('./mvcControllers');


var mvcArea = function(set) {
    utils.extend(this, set);
    if (!this.name) { throw new Error('Parameter "name" is required'); }
    //
    this.routes = new mvcRoutes({ ownerAreaName: this.name });
    this.subscribes = new mvcAreaSubs({ ownerAreaName: this.name });
    this.controllers = new mvcControllers({ ownerAreaName: this.name });
};

mvcArea.prototype = {

    name: null, path: null,

    routes: null, subscribes: null, controllers: null,

    constructor: mvcArea, className: 'mvcArea',

    ownedRoutes: function() {
        return this.routes.all();
    },

    findController: function(controllerName) {
        return this.controllers.get(controllerName);
    },

    fireSubscribes: function(funcName) {
        var self = this;
        utils.each(this.subscribes.all(), function(k, sub) {
            if (sub && utils.isFunction(sub[funcName])) {
                sub[funcName](self);
            }
        });
        return this;
    }
};

module.exports = mvcArea;
