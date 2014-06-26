/*
* i18n
* author: ronglin
* create date: 2014.6.18
*/

module.exports = ['utils', function(utils) {
	return function(key) {
		return utils.i18n(key, key);
	};
}];