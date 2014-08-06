/*
* mvcModelAttr
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.1
*/

'use strict';

var utils = require('zoo-utils');

var mvcModelAttr = module.exports = function(set) {
    if (utils.isString(set)) {
        this.paramName = set;
    } else {
        utils.extend(this, set);
    }
    if (!this.paramName) {
        throw new Error('The "paramName" of mvcModelAttr attribute is required');
    }
};

mvcModelAttr.subClass = function(model) {
    var sub = function(set) {
        sub.superclass.constructor.call(this, set);
    };
    utils.inherit(sub, mvcModelAttr, {
        model: model
    });
    return sub;
};

mvcModelAttr.prototype = {

    paramName: null, model: null,

    constructor: mvcModelAttr, className: 'mvcModelAttr',

    getModel: function() {
        return this.model;
    }
};
