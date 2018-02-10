// Register `transfer` component, along with its associated controller and template
angular.
  module('atmApp').
  component('transfer', {
    templateUrl: 'transfer/transfer.template.html',
    controller: ['Transfer', 'transaction', function TransferController(Transfer, transaction) {
      this.transaction = transaction;
      this.transfer = function() {
        var data = {
          account_number: this.account,
          amount: this.amount
        };
        var transfer = Transfer.save(data, function(data) {
          console.log(data);
          if (data.status) {
            transaction.success = true;
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