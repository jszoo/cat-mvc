/*
* vash
* author: ronglin
* create date: 2014.7.10
*/

var vash = require('vash');

vash.config.useWith = true;

module.exports = function(filePath, options, callback) {
	vash.renderFile(filePath, options, callback);
};
