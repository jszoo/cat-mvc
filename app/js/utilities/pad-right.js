/*
* pad-right
* author: ronglin
* create date: 2014.5.4
*/

module.exports = function(str, len, chr) {
	return require('./pad-left')(str, len, chr, true);
};