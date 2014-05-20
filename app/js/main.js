/*
* main
* author: ronglin
* create date: 2014.4.22
*/

'use strict';

var utilitiesName = 'Bloga.utilities';
angular.module(utilitiesName, []).constant('utils', require('./utilities/all'));

require('./libraries/all');

var directives = require('./directives/all');
var dataService = require('./dataservice/all');
var controllers = require('./controllers/all');
var tests = require('./tests/all');

var bloga = angular.module('Bloga', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    utilitiesName,
    directives.name,
    dataService.name,
    controllers.name
].concat(tests));

bloga.config(['$routeProvider', 'utils', function ($routeProvider, utils) {
    $routeProvider.when('/home', { templateUrl: utils.viewUrl('views/home.html'), controller: 'HomeCtrl' });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);
