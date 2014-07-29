/*
* directives
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'cms.directives';

angular.module(name, [])
.directive('cmsHeader', require('./header'))
.directive('cmsFooter', require('./footer'))
.directive('cmsMenu', require('./menu'))
.directive('imgSrc', require('./imgsrc'));