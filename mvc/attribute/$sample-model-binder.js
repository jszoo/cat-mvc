/*
* sampleModelBinder
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.1
*/

'use strict';

var utils = require('zoo-utils');

var sampleModelBinderAttribute = module.exports = function(set) {
    if (utils.isString(set)) {
        this.paramName = set;
    } else {
        utils.extend(this, set);
    }
    if (!this.paramName) {
        throw new Error('The "paramName" of sampleModelBinderAttribute is required');
    }
};

sampleModelBinderAttribute.prototype = {

    paramName: null,

    constructor: sampleModelBinderAttribute,

    getParamName: function() {
        return this.paramName;
    },

    getBinder: function() {
        return new sampleModelBinder();
    }
};

/*******************************************************************************/

var sampleModelBinder = function() {
    // initialize binder settings
};

sampleModelBinder.prototype = {

    constructor: sampleModelBinder,

    bindModel: function(controllerContext, bindingContext) {
        return 'customized value';
    }
};
