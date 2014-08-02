/*
* paramModel
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.1
*/

'use strict';

var utils = require('../utilities');

var paramModel = module.exports = function(set) {
    if (utils.isString(set)) {
        this.paramName = set;
    } else {
        utils.extend(this, set);
    }
    if (!this.paramName) {
        throw new Error('The paramName of paramModel attribute is required');
    }
};

paramModel.subClass = function(model) {
    var sub = function(set) {
        sub.superclass.constructor.call(this, set);
    };
    utils.inherit(sub, paramModel, {
        model: model
    });
    return sub;
};

paramModel.prototype = {

    paramName: null, model: null,

    constructor: paramModel, className: 'paramModel',

    resolveModel: function() {
        return this.model.injectValues.apply(this.model, arguments);
    }
};
