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

                tournament.setupLevels = function() {
                  var levelNumber = 1;
                  angular.forEach(tournament.levels, function(level){
                    level.number = levelNumber;
                    levelNumber++;
                    level.type = 'round';
                    if (level.number === 1) {
                      tournament.currentLevel = level;
                    }
                    if (level.number === 2) {
                      tournament.nextLevel = level;
                    }
                  });
                };
                tournament.setupLevels();

                tournament.addBreak = function() {
                  tournament.levels.unshift({
                    type:'break'
                  });
                };

                $scope.startTimer = function (){
                    $scope.$broadcast('timer-start');
                    $scope.timerRunning = true;
                };

                $scope.stopTimer = function (){
                    $scope.$broadcast('timer-stop');
                    $scope.timerRunning = false;
                };

                tournament.roundEnd = function() {
                  tournament.currentLevel = angular.copy(tournament.nextLevel);
                  angular.forEach(tournament.levels, function(level){
                    console.log(tournament.nextLevel.round);
                    if (tournament.nextLevel.round + 1 === level.round) {
                      tournament.nextLevel = level;
                      console.log(tournament.nextLevel);
                    }
                  });
                };
            }
        ]);
}());
