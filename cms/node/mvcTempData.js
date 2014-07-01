/*
* mvcTempData
* author: ronglin
* create date: 2014.7.1
*/

'use strict';

var utils = require('./utilities');

var mvcTempData = function(set) {
	utils.extend(this, set);
};

mvcTempData.isTempData = true

mvcTempData.prototype = {

	constructor: mvcTempData
};

module.exports = mvcTempData;
