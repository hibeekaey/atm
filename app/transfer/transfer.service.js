'use strict';

// Define the `transfer` service
angular.
  module('transfer').
  factory('Transfer', ['$resource',
    function($resource) {
      return $resource('https://fingerprint-atm-service.herokuapp.com/transactions/credits');
    }
  ]);