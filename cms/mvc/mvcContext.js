/*
* mvcContext
* author: ronglin
* create date: 2014.7.9
*/

'use strict';

var utils = require('./utilities');

var mvcContext = module.exports = function(set) {
    utils.extend(this, set);
};

var clone = function(ins, className) {
    return new mvcContext({
        app: ins.app,
        items: ins.items,
        rulee: ins.rulee,
        request: ins.request,
        response: ins.response,
        route: ins.route,
        routeData: ins.routeData,
        routeArea: ins.routeArea,
        routeSet: ins.routeSet,
        className: (className || ins.className)
    });
};

mvcContext.prototype = {

    app: null, items: null, rulee: null, request: null, response: null,

    route: null, routeData: null, routeArea: null, routeSet: null,

    constructor: mvcContext, className: 'mvcContext',

    destroy: function() {
        var self = this;
        utils.each(this, function(key) {
            var t = utils.type(self[key]);
            if (t !== 'string' && t !== 'function') {
                self[key] = null;
            }
        });
    },

    toHttpContext: function() {
        return clone(this);
    },

    toControllerContext: function(controller) {
        return utils.extend(clone(this, 'mvcControllerContext'), { controller: controller });
    },

    toAuthorizationContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.extend(clone(this, 'mvcAuthorizationContext'), merge);
    },

    toExceptionContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.extend(clone(this, 'mvcExceptionContext'), merge);
    },

    toActionExecutingContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.extend(clone(this, 'mvcActionExecutingContext'), merge);
    },

    toActionExecutedContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.extend(clone(this, 'mvcActionExecutedContext'), merge);
    },

    toResultExecutingContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.extend(clone(this, 'mvcResultExecutingContext'), merge);
    },

    toResultExecutedContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.extend(clone(this, 'mvcResultExecutedContext'), merge);
    },

    toViewContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
    	return utils.extend(clone(this, 'mvcViewContext'), merge);
    }
};
