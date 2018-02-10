'use strict';

angular.
  module('atmApp').
  config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
    
      $routeProvider.
        when('/scan', {
          template: '<scan class="screen"></scan>'
        }).
        when('/invalid', {
          template: '<invalid class="screen"></invalid>'
        }).
        when('/options', {
          template: '<options class="screen"></options>'
        }).
        when('/withdraw', {
          template: '<withdraw class="screen"><withdraw>'
        }).
        when('/transfer', {
          template: '<transfer class="screen"></transfer>'
        }).
        when('/balance', {
          template: '<balance class="screen"></balance>'
        }).
        when('/complete', {
          template: '<complete class="screen"></complete>'
        }).
        when('/register', {
          template: '<register class="screen"></register>'
        }).
        otherwise('/scan');
    }
  ]);