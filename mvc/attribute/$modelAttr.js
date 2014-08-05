/*
* modelAttr
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.1
*/

'use strict';

var utils = require('zoo-utils');

var modelAttr = module.exports = function(set) {
    if (utils.isString(set)) {
        this.paramName = set;
    } else {
        utils.extend(this, set);
    }
    if (!this.paramName) {
        throw new Error('The paramName of modelAttr attribute is required');
    }
};

modelAttr.subClass = function(model) {
    var sub = function(set) {
        sub.superclass.constructor.call(this, set);
    };
    utils.inherit(sub, modelAttr, {
        model: model
    });
    return sub;
};

modelAttr.prototype = {

    paramName: null, model: null,

    constructor: modelAttr, className: 'modelAttr',

    getModel: function() {
        return this.model;
    }
};
