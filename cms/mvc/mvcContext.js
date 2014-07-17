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
            if (utils.isObject(self[key])) {
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

    toAuthorizeContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.extend(clone(this, 'mvcAuthorizeContext'), merge);
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
