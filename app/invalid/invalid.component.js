// Register `atm` component, along with its associated controller and template
angular.
  module('atmApp').
  component('invalid', {
    templateUrl: 'invalid/invalid.template.html',
    controller: ['$timeout', function InvalidController($timeout) {
      $timeout(function () {
        location.href = '#!/scan';
      }, 2000);
    }]
  });