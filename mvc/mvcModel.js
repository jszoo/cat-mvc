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

mvcModel.resolveParamDefault = function(httpContext, paramName) {
    var datas = requestDatas(httpContext, 'lowerRoot');
    var matched = false, value;
    if (paramName in datas) {
        matched = true;
        value = datas[paramName];
    } else {
        matched = false;
        value = undefined;
    }
    // only when not matched then return undefined
    if (value === undefined && matched === true) {
        value = null;
    }
    // ret
    return value;
};

mvcModel.prototype = {

    ownerAreaName: null, path: null, name: null, raw: null,

    constructor: mvcModel, className: 'mvcModel',

    inner: function(p) {
        return (p === undefined) ? (this.raw) : (this.raw = p, this);
    },

    resolveParam: function(httpContext, paramName) {
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
                    var ns = parentNs + key.toLowerCase();
                    var metas = modelling.resolve(item);
                    if (metas.has()) {
                        var value1 = utils.readObj(datas, ns);
                        var value2 = utils.readObj(datas, paramName + ns);
                        obj[key] = metas.exe(value2 || value1);
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
