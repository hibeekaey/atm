'use strict';

// Define the `scan` service
angular.
  module('scan').
  factory('Scan', ['$resource',
    function($resource) {
      return $resource('https://localhost:8443/SGIFPCapture');
    }
  ]).
  factory('FingerPrints', ['$resource',
    function($resource) {
      return $resource('https://fingerprint-atm-service.herokuapp.com/users/fingerprints');
    }
  ]).
  factory('Account', ['$resource',
    function($resource) {
      return $resource('https://fingerprint-atm-service.herokuapp.com/users/:id');
    }
  ]);