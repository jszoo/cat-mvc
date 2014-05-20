/*
* args2arr
* author: ronglin
* create date: 2014.5.20
*/

var splice = Array.prototype.splice;

module.exports = function(args, skip) {
	return splice.call(args, skip || 0);
};