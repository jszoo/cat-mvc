/*
* menu
* author: ronglin
* create date: 2014.6.18
*/

module.exports = ['utils', function(utils) {
	return {
		scope: { current: '@' },
		templateUrl: utils.viewUrl('views/directives/menu.html'),
		restrict: 'E',
		replace: true
	};
}];