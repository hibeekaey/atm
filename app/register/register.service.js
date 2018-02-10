'use strict';

// Define the `register` service
angular.
  module('register').
  factory('Scan', ['$resource',
    function($resource) {
      return $resource('https://localhost:8443/SGIFPCapture');
    }
  ]).
  factory('Register', ['$resource',
    function($resource) {
      return $resource('https://fingerprint-atm-service.herokuapp.com/users');
    }
  ]);