/*
* pad-left
* author: ronglin
* create date: 2014.5.4
*/

module.exports = function(str, len, chr, reverse){
	if (str !== null && str !== undefined) {
		str = str + ''; var num = len - str.length;
		if (num > 0) {
			for (var i = 0; i < num; i++) {
				if (reverse === true) {
					str = str + chr;
				} else {
					str = chr + str;
				}
			}
		}
	}
	return str;
};