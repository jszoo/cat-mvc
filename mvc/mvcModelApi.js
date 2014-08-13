/*
* mvcModelApi
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.13
*/

'use strict';

var utils = require('zoo-utils');

var mvcModelApi = module.exports = function(set) {
    utils.extend(this, set);
};

mvcModelApi.prototype = {

    httpContext: null,

    constructor: mvcModelApi,

    get: function(modelName, clone) {
        var ctx = this.httpContext, app = ctx.app;
        var attrClass = app.attributes.get(modelName, ctx.routeArea.name);
        if (!attrClass && ctx.routeArea !== ctx.areas.rootArea()) {
            attrClass = app.attributes.get(modelName, ctx.areas.rootArea().name);
        }
        if (attrClass) {
            var attr = new attrClass();
            if (utils.isFunction(attr.getBinder)) {
                var binder = attr.getBinder();
                var modelMeta = binder.getModelMeta();
                var metadata = modelMeta.inner();
                if (clone !== false) {
                    return utils.extend(true, {}, metadata);
                } else {
                    return metadata;
                }
            }
        }
    },

    new: function(modelName) {
        var metadata = this.get(modelName);
        if (!metadata) { return; }
        //
        var modelling = this.httpContext.app.modelling;
        var metas = modelling.resolve(metadata);
        if (metas.has()) {
            return metas.parse(null, '', function(err) { });
        }
        //
        var clone = utils.extend(true, {}, metadata);
        var walk = function(obj) {
            var t = utils.type(obj);
            if (t === 'array' || t === 'object') {
                utils.each(obj, function(key, item) {
                    var metas = modelling.resolve(item);
                    if (metas.has()) {
                        obj[key] = metas.parse(null, '', function(err) { });
                    } else {
                        walk(item);
                    }
                });
            }
        };
        walk(clone);
        clone.__metadata = metadata;
        return clone;
    }
};
