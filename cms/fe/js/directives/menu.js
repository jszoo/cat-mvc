/*
* menu
* author: ronglin
* create date: 2014.6.18
*/

module.exports = ['utils', function(utils) {
    // ret
    return {
        scope: { current: '@' },
        controller: ['$scope', function($scope) {
            $scope.showPage = function(page) {
                $scope.current = page;
            };
        }],
        templateUrl: utils.viewUrl('views/directives/menu.html'),
        restrict: 'E',
        replace: true
    };
}];