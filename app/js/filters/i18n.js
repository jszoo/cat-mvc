/*
* i18n
* author: ronglin
* create date: 2014.6.18
*/

module.exports =['utils', function(utils) {
	return function(input) {
		var str = utils.readObj({}, input);
		if (str === undefined || str === null) {
			return input;
		} else {
			return str;
		}
	};
}];