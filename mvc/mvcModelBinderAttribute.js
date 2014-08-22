/*
* mvcModelBinderAttribute
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.1
*/

'use strict';

var utils = require('zoo-utils');

var mvcModelBinderAttribute = module.exports = function(set) {
    if (utils.isString(set)) {
        this.paramName = set;
    } else {
        utils.extend(this, set);
    }
    if (!this.paramName) {
        throw new Error('The "paramName" of mvcModelBinderAttribute is required');
    }
};

mvcModelBinderAttribute.prototype = {

    paramName: null, binder: null,

    constructor: mvcModelBinderAttribute,

    getParamName: function() {
        return this.paramName;
    },

    getBinder: function() {
        return this.binder;
    }
};

// inherit sub attribute classes
mvcModelBinderAttribute.subClass = function(binder) {
    var sub = function(set) {
        sub.superclass.constructor.call(this, set);
        if (!this.binder) {
            throw new Error('The "binder" of mvcModelBinderAttribute is required');
        }
    };
    utils.inherit(sub, mvcModelBinderAttribute, {
        binder: binder
    });
    return sub;
};
