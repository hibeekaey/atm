// Register `options` component, along with its associated controller and template
angular.
  module('atmApp').
  component('options', {
    templateUrl: 'options/options.template.html',
    controller: ['transaction', function OptionsController(transaction) {
      this.transaction = transaction;
    }]
  });