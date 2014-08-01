/*
* mvcModel
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.31
*/

'use strict';

var utils = require('./utilities');

var mvcModel = module.exports = function(set) {
    utils.extend(this, set);
};

mvcModel.api = function() {
};

mvcModel.loadfile = function(filePath) {
};

mvcModel.prototype = {

    name: null, ownerAreaName: null, model: null,

    constructor: mvcModel, className: 'mvcModel'
};
