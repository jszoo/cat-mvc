/*
* directives
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'Bloga.directives';

angular.module(name, [])
.directive('blogaHeader', require('./header'));