/*
* directives
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'rulee.directives';

angular.module(name, [])
.directive('ruleeHeader', require('./header'))
.directive('ruleeFooter', require('./footer'))
.directive('ruleeMenu', require('./menu'))
.directive('imgSrc', require('./imgsrc'));