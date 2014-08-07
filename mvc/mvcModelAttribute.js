/*
* mvcModelAttribute
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.1
*/

'use strict';

var utils = require('zoo-utils');

var mvcModelAttribute = module.exports = function(set) {
    if (utils.isString(set)) {
        this.paramName = set;
    } else {
        utils.extend(this, set);
    }
    if (!this.paramName) {
        throw new Error('The "paramName" of mvcModelAttribute is required');
    }
};

mvcModelAttribute.subClass = function(model) {
    var sub = function(set) {
        sub.superclass.constructor.call(this, set);
    };
    utils.inherit(sub, mvcModelAttribute, {
        model: model
    });
    return sub;
};

mvcModelAttribute.prototype = {

    paramName: null, model: null,

    constructor: mvcModelAttribute, className: 'mvcModelAttribute',

    getModel: function() {
        return this.model;
    }
};
