/*
* mvcViewData
* author: ronglin
* create date: 2014.7.1
*/

'use strict';

var utils = require('./utilities');

var mvcViewData = function(set) {
	utils.extend(this, set);
};

mvcViewData.isViewData = true

mvcViewData.prototype = {

	constructor: mvcViewData
};

module.exports = mvcViewData;
