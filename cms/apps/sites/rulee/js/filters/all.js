/*
* filters
* author: ronglin
* create date: 2014.6.18
*/

var name = module.exports.name = 'rulee.filters';

angular.module(name, [])
.filter('i18n', require('./i18n'));