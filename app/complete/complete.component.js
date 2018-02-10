// Register `complete` component, along with its associated controller and template
angular.
  module('atmApp').
  component('complete', {
    templateUrl: 'complete/complete.template.html',
    controller: ['$timeout', 'transaction', function CompleteController($timeout, transaction) {
      this.transaction = transaction;
      transaction = {};
      console.log(transaction);
      $timeout(function () {
        location.href = '#!/scan';
      }, 2000);
    }]
  });