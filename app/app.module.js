'use strict';

// Define the `atmApp` module
angular.module('atmApp', [
  // ...which depends on the `atm` module
  'ngRoute', 'ngResource', 'scan', 'invalid', 'options', 'withdraw', 'transfer', 'balance', 'complete'
]);