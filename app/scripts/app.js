'use strict';

/**
 * @ngdoc overview
 * @name hackathonCodeGamesApp
 * @description
 * # hackathonCodeGamesApp
 *
 * Main module of the application.
 */
angular
  .module('hackathonCodeGamesApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'kendo.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/search/:server/:instance/:level/:from/:end', {
        templateUrl: 'views/detailsearch.html',
        controller: 'SearchCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/statistics', {
        templateUrl: 'views/statistics.html',
        controller: 'StatisticsCtrl',
        controllerAs: 'statistics'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
