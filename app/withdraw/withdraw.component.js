// Register `withdraw` component, along with its associated controller and template
angular.
  module('atmApp').
  component('withdraw', {
    templateUrl: 'withdraw/withdraw.template.html',
    controller: ['Withdraw', 'transaction', function WithdrawController(Withdraw, transaction) {
      this.transaction = transaction;
      this.withdraw = function(amount) {
        var data = {
          account_id: transaction.id,
          amount: amount
        };
        var withdraw = Withdraw.save(data, function(data) {
          console.log(data);
          if (data.status) {
            transaction.success = true;
            transaction.cash = true;
          }
          location.href = '#!/complete';
        },
        function(reply) {
          console.log(reply);
          location.href = '#!/complete';
        });
      }
    }]
  });