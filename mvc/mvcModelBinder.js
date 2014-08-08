/*
* mvcModelBinder
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.1
*/

'use strict';

var utils = require('zoo-utils');

var mvcModelBinder = module.exports = function(model) {
    this.model = model;
    if (!this.model) {
        throw new Error('The "model" of mvcModelBinder is required');
    }
};

mvcModelBinder.prototype = {

    model: null,

    constructor: mvcModelBinder, className: 'mvcModelBinder',

    bindModel: function(controllerContext, bindingContext) {
        var raw = this.model.inner();
        var paramName = bindingContext.paramName;
        var paramsDict = bindingContext.paramsDict;
        var modelling = controllerContext.app.modelling;
        var datas = controllerContext.requestDatas('lowerAll');
        //
        var metas = modelling.resolve(raw);
        if (metas.has()) {
            var value = utils.readObj(datas, paramName);
            return metas.exe(value);
        } else {
            paramName += '.';
            var clone = utils.extend(true, {}, raw);
            var doWalk = function(obj, parentNs) {
                if (!utils.isObject(obj)) { return; }
                if (parentNs) { parentNs += '.'; }
                utils.each(obj, function(key, item) {
                    var lckey = key.toLowerCase(), ns = parentNs + lckey;
                    var metas = modelling.resolve(item);
                    if (metas.has()) {
                        var value = null;
                        if (parentNs) {
                            value = utils.readObj(datas, paramName + ns);
                        } else if (!paramsDict[lckey]) {
                            value = utils.readObj(datas, ns);
                        }
                        obj[key] = metas.exe(value);
                    } else {
                        doWalk(item, ns);
                    }
                });
            };
            doWalk(clone, '');
            return clone;
        }
    }
};

mvcModelBinder.resolveParams = function(controllerContext, paramNames, binderAttrs) {
    var findAttribute = function() { }, routeAreaName, rootAreaName;
    if (binderAttrs && binderAttrs.length) {
        routeAreaName = controllerContext.routeArea.name;
        rootAreaName = controllerContext.app.areas.rootArea().name;
        findAttribute = function(paramName, areaName) {
            var attr;
            utils.each(binderAttrs, function(i, item) {
                if (item.paramName.toLowerCase() === paramName &&
                    item.getBinder().model.ownerAreaName === areaName) {
                    attr = item;
                    return false;
                }
            });
            if (attr) {
                return attr;
            } else if (areaName !== rootAreaName) {
                return findAttribute(paramName, rootAreaName);
            } else {
                return null;
            }
        };
    }
    //
    var namesDict = {};
    utils.each(paramNames, function(i, name) {
        namesDict[name.toLowerCase()] = true;
    });
    //
    var values = [];
    utils.each(paramNames, function(i, name) {
        var lowerName = name.toLowerCase();
        if (lowerName.charAt(0) === '$') {
            lowerName = lowerName.substr(1);
        }
        var attr = findAttribute(lowerName, routeAreaName), val;
        if (attr) {
            val = attr.getBinder().bindModel(controllerContext, {
                paramName: lowerName,
                paramsDict: namesDict
            });
        } else {
            val = controllerContext.requestDatas('lowerRoot')[lowerName];
        }
        values.push(val || null);
    });
    return values;
};
