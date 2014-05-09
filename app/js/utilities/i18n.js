/*
* i18n
* author: ronglin
* create date: 2014.5.4
*/

var readObj = require('./read-obj');

module.exports = function(key, val) {
	var getVal = readObj({}, key);
	return getVal !== undefined ? getVal : val;
};