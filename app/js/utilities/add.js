/*
* utilities
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'Bloga.utilities';

angular.module(name, [])
.constant('utils', {
	padLeft: require('./pad-left'),
	padRight: require('./pad-right'),
	viewUrl: require('./view-url'),
	readObj: require('./read-obj'),
	i18n: require('./i18n')
});
