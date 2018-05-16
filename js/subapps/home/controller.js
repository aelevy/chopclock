(function() {
    'use strict';
    angular.module('ngSeedApp.controllers', ['ui.sortable'])
        .controller('tournamentController', ['$scope',
            function($scope) {
                var tournament = this;
                tournament.setup = true;
                tournament.prizePayouts = Array(5);
                tournament.settings = [];
                tournament.roundEnd = function() {
                    console.log('round overrr');
                };
            }
        ]);
}());