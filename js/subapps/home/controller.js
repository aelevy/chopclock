(function() {
    'use strict';
    angular.module('ngSeedApp.controllers', ['ui.sortable'])
        .controller('tournamentController', ['$scope',
            function($scope) {
                var tournament = this;
                tournament.setup = true;
                tournament.prizePayouts = Array(5);
                tournament.settings = [];
                tournament.levels = [
                  {},{},{},{},{},{},{},{},{},{},
                  {},{},{},{},{},{},{},{},{},{},
                  {},{},{},{},{},{},{},{},{},{}
                ];

                $scope.list = tournament.levels;
                // $scope.sortingLog = [];
                //
                // $scope.sortableOptions = {
                //   update: function(e, ui) {
                //     var logEntry = tournament.levels.map(function(i){
                //       return i.value;
                //     }).join(', ');
                //     $scope.sortingLog.push('Update: ' + logEntry);
                //   },
                //   stop: function(e, ui) {
                //     // this callback has the changed model
                //     var logEntry = tournament.levels.map(function(i){
                //       return i.value;
                //     }).join(', ');
                //     $scope.sortingLog.push('Stop: ' + logEntry);
                //   }
                // };
                tournament.roundEnd = function() {
                    console.log('round overrr');
                };
            }
        ]);
}());
