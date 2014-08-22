/*
* mvcModelBinder
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.1
*/

'use strict';

var utils = require('zoo-utils');

var mvcModelBinder = module.exports = function(modelMeta) {
    this.modelMeta = modelMeta;
    if (!this.modelMeta) {
        throw new Error('The "modelMeta" of mvcModelBinder is required');
    }
};

mvcModelBinder.prototype = {

    modelMeta: null,

    constructor: mvcModelBinder,

    getModelMeta: function() {
        return this.modelMeta;
    },

    bindModel: function(controllerContext, bindingContext) {
        var metadata = this.modelMeta.inner();
        var rootNs = bindingContext.paramName;
        var paramsDict = bindingContext.paramsDict;
        var modelState = bindingContext.modelState;
        var modelling = controllerContext.app.modelling;
        var datas = controllerContext.requestDatas('lowerAll');
        //
        var metas = modelling.resolve(metadata);
        if (metas.has()) {
            var value = utils.readObj(datas, rootNs);
            return metas.exe(value, rootNs, function(err) {
                modelState.addModelError(rootNs, err);
            });
        } else {
            var clone = utils.extend(true, {}, metadata);
            var walk = function(obj, parentNs) {
                var t = utils.type(obj);
                var isArr = (t === 'array')
                var isObj = (t === 'object');
                if (!isArr && !isObj) { return; }
                //
                utils.each(obj, function(key, item) {
                    var partNs = isArr ? ('[' + key + ']') : ('.' + key.toLowerCase());
                    var currNs = parentNs + partNs;
                    //
                    var metas = modelling.resolve(item);
                    if (metas.has()) {
                        var fullNs = rootNs + currNs, stateNs = fullNs;
                        var value = utils.readObj(datas, fullNs);
                        //
                        if (!value && !parentNs) {
                            var currKey = String(key).toLowerCase();
                            if (!paramsDict[currKey]) {
                                var value2 = utils.readObj(datas, currKey);
                                if (value2 !== undefined) {
                                    stateNs = currKey;
                                    value = value2;
                                }
                            }
                        }
                        // exe
                        value = metas.exe(value, stateNs, function(err) {
                            modelState.addModelError(stateNs, err);
                        });
                        // state
                        modelState.setModelValue(stateNs, (obj[key] = value));
                    }
                    else {
                        // loop
                        walk(item, currNs);
                    }
                });
            };
            walk(clone, '');
            return clone;
        }
    }
};

mvcModelBinder.resolveParams = function(controllerContext, paramNames, binderAttrs) {
    var findModelAttribute = function() { };
    var findOhterAttributes = function() { };
    var routeAreaName, rootAreaName;
    //
    if (binderAttrs && binderAttrs.length) {
        routeAreaName = controllerContext.routeArea.name;
        rootAreaName = controllerContext.app.areas.rootArea().name;
        // only one model binder attribute is allowed
        findModelAttribute = function(paramName, areaName) {
            var attr;
            utils.each(binderAttrs, function(i, item) {
                if (item.getParamName().toLowerCase() === paramName) {
                    if (item.getBinder() instanceof mvcModelBinder) {
                        if (item.getBinder().getModelMeta().ownerAreaName === areaName) {
                            attr = item;
                            return false;
                        }
                    }
                }
            });
            if (attr) {
                return attr;
            } else if (areaName !== rootAreaName) {
                return findModelAttribute(paramName, rootAreaName);
            } else {
                return null;
            }
        };
        // multiple custom binder attribute is allowed
        findOhterAttributes = function(paramName) {
            var attrs = [];
            utils.each(binderAttrs, function(i, item) {
                if (item.getParamName().toLowerCase() === paramName) {
                    if (!(item.getBinder() instanceof mvcModelBinder)) {
                        attrs.push(item);
                    }
                }
            });
            return attrs;
        };
    }
    //
    var namesDict = {};
    utils.each(paramNames, function(i, name) {
        namesDict[name.toLowerCase()] = true;
    });
    //
    var values = [];
    var bindingContext = {
        paramsDict: namesDict, paramName: '', value: null,
        modelState: controllerContext.controller.viewData.getModelState()
    };
    utils.each(paramNames, function(i, name) {
        var lowerName = name.toLowerCase();
        if (lowerName.charAt(0) === '$')
        { lowerName = lowerName.substr(1); }
        bindingContext.paramName = lowerName;
        //
        var modelAttr = findModelAttribute(lowerName, routeAreaName), val;
        if (modelAttr) {
            val = modelAttr.getBinder().bindModel(controllerContext, bindingContext);
        } else {
            val = controllerContext.requestDatas('lowerRoot')[lowerName];
        }
        //
        var otherAttrs = findOhterAttributes(lowerName);
        if (otherAttrs && otherAttrs.length) {
            utils.each(otherAttrs, function() {
                bindingContext.value = val;
                val = this.getBinder().bindModel(controllerContext, bindingContext);
            });
        }
        //
        values.push(val || null);
    });
    return values;
};
