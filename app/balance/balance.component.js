// Register `atm` component, along with its associated controller and template
angular.
  module('atmApp').
  component('balance', {
    templateUrl: 'balance/balance.template.html',
    controller: ['$http', 'Balance', function BalanceController($http, Balance) {
      var that = this;
        this.get_balance = Balance.get({}, {}, function(data) {
            that.balance = data.data.balance;
            console.log(data);
          },
          function(reply) {
            console.log(reply);
          }
        );
    }]
  });