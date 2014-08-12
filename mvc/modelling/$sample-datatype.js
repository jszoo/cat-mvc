/*
* sampleDataType
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.5
*/

'use strict';

var utils = require('zoo-utils');

var sampleDataType = module.exports = function(set) {
    utils.extend(this, set);
};

sampleDataType.prototype = {

    constructor: sampleDataType,

    parse: function(value, fieldName) {
		//TODO: customize logic
		// return the parsed value
		// just throw Error if parse failure
		return value;
    }
};