// Register `atm` component, along with its associated controller and template
angular.
  module('atmApp').
  component('balance', {
    templateUrl: 'balance/balance.template.html',
    controller: ['Balance', '$location', 'transaction', function BalanceController(Balance, $location, transaction) {
      var that = this;
      this.transaction = transaction;
      this.get_balance = Balance.get({ id: transaction.id }, function(data) {
        console.log(data);
        that.balance = data.data.balance;
        if (!data.status) {
          location.href = '#!/complete';
        }
      },
      function(reply) {
        console.log(reply);
        location.href = '#!/complete';
      });
    }]
  });