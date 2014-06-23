/*
* src
* author: ronglin
* create date: 2014.6.19
*/

module.exports = ['utils', function(utils) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	if (element.prop('tagName') === 'IMG') {
        		var img = utils.trim(attrs.imgSrc, { find: '/'});
        		element.attr('src', utils.format('img/{0}', img));
        	}
        }
    };
}];