/*
* mvcViewData
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.1
*/

'use strict';

var utils = require('zoo-utils'),
    mvcModelState = require('./mvcModelState');

var mvcViewData = module.exports = function(set) {
    utils.extend(this, set);
    if (!this.model) { this.model = {}; }
    this.modelState = new mvcModelState();
    mvcViewData.superclass.constructor.call(this, true);
};

utils.inherit(mvcViewData, utils.dictionary, {

    httpContext: null, model: null, modelState: null,

    setModel: function(model) {
        this.model = model;
    }
    
});
