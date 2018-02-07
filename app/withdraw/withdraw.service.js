'use strict';

// Define check balance service
angular.
  module('withdraw').
  factory('Withdraw', ['$resource',
    function($resource) {
      return $resource('https://fingerprint-atm-service.herokuapp.com/transactions/withdrawals');
    }
  ]);