/*
* controllers
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'Bloga.controllers';

angular.module(name, [])
.controller('MainCtrl', require('./main-controller'))
.controller('HomeCtrl', require('./home-controller'));