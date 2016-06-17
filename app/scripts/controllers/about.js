'use strict';

/**
 * @ngdoc function
 * @name hackathonCodeGamesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hackathonCodeGamesApp
 */
angular.module('hackathonCodeGamesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
