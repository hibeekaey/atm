'use strict';

// Define the `withdraw` service
angular.
  module('withdraw').
  factory('Withdraw', ['$resource',
    function($resource) {
      return $resource('https://fingerprint-atm-service.herokuapp.com/transactions/withdrawals');
    }
  ]);