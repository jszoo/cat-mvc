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
    var obj = new mvcContext();
    utils.each(obj, function(key) {
        if (obj[key] === null && ins[key]) {
            obj[key] = ins[key];
        }
    });
    obj.className = className || ins.className;
    return obj;
};

mvcContext.prototype = {

    request: null, response: null, rulee: null, items: null, mvc: null,

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

    toAuthorizationContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.extend(clone(this, 'mvcAuthorizationContext'), merge);
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
