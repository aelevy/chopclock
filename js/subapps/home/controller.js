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

                // $scope.$watch('tournament.currentLevel', function(newValue,oldValue) {
                //     console.log(oldValue,newValue);
                //     tournament.currentLevel = newValue;
                // }, true);

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
                  tournament.currentLevel = tournament.nextLevel;
                  angular.forEach(tournament.levels, function(level){
                    if (tournament.nextLevel.number + 1 === level.number) {
                      tournament.newNextLevel = level;
                    }
                  });
                  $scope.$broadcast('timer-reset');
                  tournament.nextLevel = tournament.newNextLevel;
                  $scope.$broadcast('timer-start');
                };
            }
        ]);
}());
