/*
* mvcModelMeta
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.31
*/

'use strict';

var utils = require('zoo-utils'),
    modelsDefined;

var mvcModelMeta = module.exports = function(set) {
    utils.extend(this, set);
};

mvcModelMeta.api = function(name, obj) {
    if (!obj) {
        obj = name;
        name = null;
    }
    var ret = new mvcModelMeta({
        name: name,
        metadata: obj
    });
    if (modelsDefined) {
        modelsDefined.push(ret);
    }
    return ret;
};

mvcModelMeta.loadfile = function(filePath) {
    var ret, expo; modelsDefined = [];
    try {
        delete require.cache[filePath];
        expo = require(filePath);
    } catch (ex) {
        modelsDefined = null;
        return null;
    }
    //
    if (expo instanceof mvcModelMeta) {
        ret = [expo];
    }
    else if (modelsDefined.length) {
        ret = modelsDefined;
    }
    else {
        ret = [mvcModelMeta.api(expo)];
    }
    //
    modelsDefined = null;
    return ret;
};

mvcModelMeta.prototype = {

    ownerAreaName: null, path: null, name: null, metadata: null,

    constructor: mvcModelMeta,

    inner: function(p) {
        return (p === undefined) ? (this.metadata) : (this.metadata = p, this);
    }
};
