/*
* main
* author: ronglin
* create date: 2014.4.22
*/

'use strict';

require('../../lib/angular/all');
var utilitiesName = 'rulee.utilities';
angular.module(utilitiesName, []).constant('utils', require('../../lib/utilities/all'));

var filters = require('./filters/all');
var directives = require('./directives/all');
var dataService = require('./dataservice/all');
var controllers = require('./controllers/all');
var tests = require('./tests/all');

var rulee = angular.module('rulee', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    utilitiesName,
    filters.name,
    directives.name,
    dataService.name,
    controllers.name
].concat(tests));

rulee.config(['$routeProvider', 'utils', function ($routeProvider, utils) {
    $routeProvider.when('/home', { templateUrl: utils.viewUrl('views/home.html'), controller: 'HomeCtrl' });
    $routeProvider.when('/blog', { templateUrl: utils.viewUrl('views/blog.html') });
    $routeProvider.when('/about', { templateUrl: utils.viewUrl('views/about.html') });
    $routeProvider.when('/admin', { templateUrl: utils.viewUrl('views/admin.html') });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);
