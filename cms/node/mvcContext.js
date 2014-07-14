/*
* mvcContext
* author: ronglin
* create date: 2014.7.9
*/

'use strict';

var utils = require('./utilities');

var mvcContext = function(set) {
    utils.extend(this, set);
};

var clone = function(ins, className) {
    return new mvcContext({
        className: (className || ins.className),
        request: ins.request,
        response: ins.response,
        route: ins.route,
        routeData: ins.routeData,
        routeArea: ins.routeArea,
        routeSet: ins.routeSet,
        rulee: ins.rulee,
        items: ins.items
    });
};

mvcContext.prototype = {

    request: null, response: null, rulee: null, items: null,

    route: null, routeData: null, routeArea: null, routeSet: null,

    constructor: mvcContext, className: 'mvcContext',

    toHttpContext: function() {
        return clone(this);
    },

    toControllerContext: function(controller) {
        return utils.extend(clone(this, 'mvcControllerContext'), { controller: controller });
    },

    toActionContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.extend(clone(this, 'mvcActionContext'), merge);
    },

    toResultContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.extend(clone(this, 'mvcResultContext'), merge);
    },

    toViewContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
    	return utils.extend(clone(this, 'mvcViewContext'), merge);
    }
};

module.exports = mvcContext;
