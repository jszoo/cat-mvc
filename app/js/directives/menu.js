/*
* menu
* author: ronglin
* create date: 2014.6.18
*/

module.exports = ['utils', function(utils) {
    var menuController = function($scope) {
        this.scope = $scope;
    };
    menuController.prototype = {
        scope: null,
        constructor: menuController,
        showPage: function(page) {
            alert(page);
        }
    };
    // ret
    return {
        scope: { current: '@' },
        controller: menuController,
        templateUrl: utils.viewUrl('views/directives/menu.html'),
        restrict: 'E',
        replace: true
    };
}];