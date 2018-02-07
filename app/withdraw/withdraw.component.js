// Register `atm` component, along with its associated controller and template
angular.
  module('atmApp').
  component('withdraw', {
    templateUrl: 'withdraw/withdraw.template.html',
    controller: ['$http', 'Withdraw', function WithdrawController($http, Withdraw) {
        this.withdraw = function(amount) {
          var data = {
            account_id: 1,
            amount: amount
          };
          var withdraw = Withdraw.save({}, data, function(data) {
            console.log(data);
            location.href = '#!/complete';
          },
          function(reply) {
            console.log(reply);
          }
        );
      }
    }]
  });