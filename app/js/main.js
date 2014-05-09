/*
* main
* author: ronglin
* create date: 2014.4.22
*/

'use strict';

var libraries = require('./libraries/add');
var utilities = require('./utilities/add');
var directives = require('./directives/add');
var dataService = require('./dataservice/add');
var controllers = require('./controllers/add');
var tests = require('./tests/add');

var bloga = angular.module('Bloga', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    utilities.name,
    directives.name,
    dataService.name,
    controllers.name
].concat(tests));

bloga.config(['$routeProvider', 'utils', function ($routeProvider, utils) {
    $routeProvider.when('/home', { templateUrl: utils.viewUrl('views/home.html'), controller: 'HomeCtrl' });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);
