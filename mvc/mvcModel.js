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
    if (expo instanceof mvcModel) {
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

mvcModel.prototype = {

    ownerAreaName: null, path: null, name: null, raw: null,

    constructor: mvcModel,

    inner: function(p) {
        return (p === undefined) ? (this.raw) : (this.raw = p, this);
    }
};
