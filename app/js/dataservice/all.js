/*
* data service
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'Bloga.dataService';

angular.module(name, [])
.factory('Blogs', require('./blog-service'));