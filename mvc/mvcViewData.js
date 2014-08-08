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
    this.modelState = new mvcModelState();
};

mvcViewData.prototype = {

    httpContext: null, model: null, modelState: null,

    constructor: mvcViewData, className: 'mvcViewData'
};
