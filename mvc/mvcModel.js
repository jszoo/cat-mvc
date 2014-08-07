/*
* mvcModel
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.31
*/

'use strict';

var utils = require('zoo-utils'),
    modelsDefined;

var mvcModel = module.exports = function(set) {
    utils.extend(this, set);
};

mvcModel.api = function(name, obj) {
    var len = arguments.length;
    if (len === 1 || !obj) {
        obj = name;
        name = null;
    }
    var ret = new mvcModel({
        name: name,
        raw: obj
    });
    if (modelsDefined) {
        modelsDefined.push(ret);
    }
    return ret;
};

mvcModel.loadfile = function(filePath) {
    var ret, expo; modelsDefined = [];
    try {
        delete require.cache[filePath];
        expo = require(filePath);
    } catch (ex) {
        modelsDefined = null;
        return null;
    }
    //
    if (expo.className === 'mvcModel') {
        ret = [expo];
    }
    else if (modelsDefined.length) {
        ret = modelsDefined;
    }
    else {
        ret = [mvcModel.api(expo)];
    }
    //
    modelsDefined = null;
    return ret;
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

var requestDatas = function(httpContext, lowerType) {
    if (!lowerType) { lowerType = 'lowerNane'; }
    var cacheKey = 'mvc-request-datas-' + lowerType;
    var datas = httpContext.items[cacheKey];
    if (!datas) {
        var lowerFn = lowerFuncs[lowerType];
        httpContext.items[cacheKey] = datas = {};
        utils.each(httpContext.routeData, function(i, it) {
            utils.mapObj(datas, lowerFn(it.name), it.value);
        });
        utils.each(httpContext.zoo.request.query, function(key, val) {
            utils.mapObj(datas, lowerFn(key), val);
        });
        utils.each(httpContext.zoo.request.form, function(key, val) {
            utils.mapObj(datas, lowerFn(key), val);
        });
    }
    return datas;
};

mvcModel.resolveParams = function(httpContext, paramNames, modelAttrs) {
    var findAttr = function() { }, routeAreaName, rootAreaName;
    if (modelAttrs && modelAttrs.length) {
        routeAreaName = httpContext.routeArea.name;
        rootAreaName = httpContext.app.areas.rootArea().name;
        findAttr = function(paramName, areaName) {
            var result;
            for (var att, i = 0; i < modelAttrs.length; i++) {
                att = modelAttrs[i];
                if (att.paramName.toLowerCase() === paramName &&
                    att.getModel().ownerAreaName === areaName) {
                    result = att;
                    break;
                }
            }
            if (result) {
                return result;
            } else if (areaName !== rootAreaName) {
                return findAttr(paramName, rootAreaName);
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
        var attr = findAttr(lowerName, routeAreaName), val;
        if (attr) {
            val = attr.getModel().resolveParam(httpContext, lowerName, namesDict);
        } else {
            val = requestDatas(httpContext, 'lowerRoot')[lowerName];
        }
        values.push(val || null);
    });
    return values;
};

mvcModel.prototype = {

    ownerAreaName: null, path: null, name: null, raw: null,

    constructor: mvcModel, className: 'mvcModel',

    inner: function(p) {
        return (p === undefined) ? (this.raw) : (this.raw = p, this);
    },

    resolveParam: function(httpContext, paramName, paramsDict) {
        var modelling = httpContext.app.modelling;
        var datas = requestDatas(httpContext, 'lowerAll');
        var metas = modelling.resolve(this.raw);
        if (metas.has()) {
            var value = utils.readObj(datas, paramName);
            return metas.exe(value);
        } else {
            paramName += '.';
            var clone = utils.extend(true, {}, this.raw);
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
