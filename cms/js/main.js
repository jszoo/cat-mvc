/*
* main
* author: ronglin
* create date: 2014.4.22
*/

'use strict';

require('./libraries/all');
var utilitiesName = 'cms.utilities';
angular.module(utilitiesName, []).constant('utils', require('./utilities/all'));

var filters = require('./filters/all');
var directives = require('./directives/all');
var dataService = require('./dataservice/all');
var controllers = require('./controllers/all');

var cms = angular.module('cms', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    utilitiesName,
    filters.name,
    directives.name,
    dataService.name,
    controllers.name
]);

cms.config(['$routeProvider', 'utils', function ($routeProvider, utils) {
    $routeProvider.when('/home', { templateUrl: utils.viewUrl('views/home.html'), controller: 'HomeCtrl' });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);
