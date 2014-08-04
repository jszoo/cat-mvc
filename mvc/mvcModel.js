/*
* mvcModel
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.31
*/

'use strict';

var utils = require('./utilities'),
    modellingKey = 'dont_use_me(random:' + utils.unique(8) + ')',
    modelsDefined;

var lowerRootNs = function(namespace) {
    var index = namespace.search(/\.|\[|\]/);
    if (index > -1) {
        return namespace.substr(0, index).toLowerCase() + namespace.substr(index);
    } else {
        return namespace.toLowerCase();
    }
};

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

mvcModel.resolveParamDefault = function(httpContext, paramName) {
    var data = httpContext.items['model_default_data_source'];
    if (!data) {
        var form = {}, query = {}, routeData = {};
        utils.each(httpContext.zoo.request.form, function(key, val) {
            utils.mapObj(form, lowerRootNs(key), val);
        });
        utils.each(httpContext.zoo.request.query, function(key, val) {
            utils.mapObj(query, lowerRootNs(key), val);
        });
        utils.each(httpContext.routeData, function(i, it) {
            utils.mapObj(routeData, lowerRootNs(it.name), it.value);
        });
        data = httpContext.items['model_default_data_source'] = {
            form: form,
            query: query,
            routeData: routeData
        };
    }
    var matched = false, val;
    if (paramName in data.form) {
        matched = true;
        val = data.form[paramName];
    } else if (paramName in data.query) {
        matched = true
        val = data.query[paramName];
    } else if (paramName in data.routeData) {
        matched = true;
        val = data.routeData[paramName];
    } else {
        matched = false;
        val = undefined;
    }
    // only when not matched then return undefined
    if (val === undefined && matched === true) {
        val = null;
    }
    // ret
    return val;
};

mvcModel.prototype = {

    ownerAreaName: null, path: null, name: null, raw: null,

    constructor: mvcModel, className: 'mvcModel',

    inner: function(p) {
        return (p === undefined) ? (this.raw) : (this.raw = p, this);
    },

    resolveParam: function(httpContext, paramName) {
        var modelling = httpContext.app.modelling;
        var cloneRaw = utils.extend(true, {}, this.raw);
        var unparsed = { wrap: mvcModel.resolveParamDefault(httpContext, paramName) };
        //
        var walk = function(model, ns) {
            ns += (ns ? '.' : '');
            utils.each(model, function(key, set) {
                if (!utils.hasOwn(model, key)) {
                    return;
                }
                var nns = ns + key;
                var val = utils.readObj(unparsed, nns);
                if (!set) {
                    model[key] = val;
                    return;
                }
                var result = modelling.resolve(set), val;
                if (result.type || result.valids.length > 0) {
                    if (result.type) { val = result.type.parse(val); }
                    utils.each(result.valids, function() {
                        this.isValid(val);
                    });
                    model[key] = val;
                } else {
                    walk(set, nns);
                }
            });
        };
        //
        var obj = { wrap: cloneRaw };
        return (walk(obj, ''), obj.wrap);
    }
};
