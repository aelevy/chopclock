(function() {
    'use strict';

    //Create a app level module which has dependencies on controllers and components
    var ngPrototype =
        angular.module('ngSeedApp', [
            'ui.router',
            'ngSeedApp.controllers',
            'timer'
        ]);

    ngPrototype.run(['$rootScope', '$state', '$stateParams',
            function($rootScope, $state, $stateParams) {

                //Add references to $state and $stateParams to the $rootScope
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ])
        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');

                $stateProvider.state('home', {
                    url: '/',
                    controller: 'tournamentController as tournament',
                    templateUrl: 'js/subapps/home/template.html'
                });
            }
        ]);
}());
