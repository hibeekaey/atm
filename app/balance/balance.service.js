'use strict';

// Define check balance service
angular.
  module('balance').
  factory('Balance', ['$resource',
    function($resource) {
      return $resource('https://fingerprint-atm-service.herokuapp.com/accounts/1');
    }
  ]);