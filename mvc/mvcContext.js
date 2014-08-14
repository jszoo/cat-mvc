/*
* mvcContext
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.9
*/

'use strict';

var path = require('path'),
    utils = require('zoo-utils');

var mvcContext = module.exports = function(set) {
    utils.extend(this, set);
};

var clone = function(ins) {
    return new mvcContext({
        id: ins.id,
        app: ins.app,
        zoo: ins.zoo,
        items: ins.items,
        request: ins.request,
        response: ins.response,
        route: ins.route,
        routeData: ins.routeData,
        routeArea: ins.routeArea,
        routeSet: ins.routeSet
    });
};

var lowerFuncs = {
    lowerNane: function(namespace) {
        return namespace;
    },
    lowerAll: function(namespace) {
        return namespace.toLowerCase();
    },
    lowerRoot: function(namespace) {
        var index = namespace.search(/\.|\[|\]/);
        if (index > -1) {
            return namespace.substr(0, index).toLowerCase() + namespace.substr(index);
        } else {
            return namespace.toLowerCase();
        }
    }
};

mvcContext.prototype = {

    id: null, app: null, zoo: null, items: null, request: null, response: null,

    route: null, routeData: null, routeArea: null, routeSet: null,

    constructor: mvcContext,

    destroy: function() {
        var self = this;
        utils.each(this, function(key) {
            var t = utils.type(self[key]);
            if (t !== 'string' && t !== 'function') {
                self[key] = null;
            }
        });
    },

    viewTryDirs: function() {
        var areas = this.app.areas;
        var controllerName = this.controller.name();
        //
        var dirs = [];
        dirs.push(path.join(this.routeArea.viewsPath, controllerName));
        dirs.push(this.routeArea.viewsSharedPath);
        if (this.routeArea !== areas.rootArea()) {
            dirs.push(areas.rootArea().viewsSharedPath);
        }
        // ret
        return dirs;
    },

    requestDatas: function(lowerType) {
        if (!lowerType) { lowerType = 'lowerNane'; }
        var cacheKey = 'mvc-request-datas-' + lowerType;
        var datas = this.items[cacheKey];
        if (!datas) {
            var lowerFn = lowerFuncs[lowerType];
            if (!lowerFn) { throw new utils.Error('Invalid lowerType "{0}"', lowerType); }
            //
            this.items[cacheKey] = datas = {};
            utils.each(this.routeData, function(i, it) {
                utils.mapObj(datas, lowerFn(it.name), it.value);
            });
            utils.each(this.zoo.request.query, function(key, val) {
                utils.mapObj(datas, lowerFn(key), val);
            });
            utils.each(this.zoo.request.form, function(key, val) {
                utils.mapObj(datas, lowerFn(key), val);
            });
        }
        return datas;
    },

    toHttpContext: function() {
        return clone(this);
    },

    toControllerContext: function(controller) {
        return utils.nudeExtend(clone(this), { controller: controller });
    },

    toControllerInjectContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.nudeExtend(clone(this), merge);
    },

    toAuthorizationContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.nudeExtend(clone(this), merge);
    },

    toExceptionContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.nudeExtend(clone(this), merge);
    },

    toActionExecutingContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.nudeExtend(clone(this), merge);
    },

    toActionExecutedContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.nudeExtend(clone(this), merge);
    },

    toResultExecutingContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.nudeExtend(clone(this), merge);
    },

    toResultExecutedContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.nudeExtend(clone(this), merge);
    },

    toViewContext: function(merge) {
        if (this.controller) { merge.controller = this.controller; }
        return utils.nudeExtend(clone(this), merge);
    }
};
