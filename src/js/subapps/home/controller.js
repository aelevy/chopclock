(function() {
    'use strict';
    angular.module('ngSeedApp.controllers', ['ui.sortable'])
        .controller('homeController', ['$scope',
            function($scope) {
                $scope.setup = true;
                $scope.roundEnd = function() {
                    console.log('round overrr');
                };
            }
        ]);
}());