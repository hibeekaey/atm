// Register `atm` component, along with its associated controller and template
angular.
  module('atmApp').
  component('transfer', {
    templateUrl: 'transfer/transfer.template.html',
    controller: ['$scope', '$location', '$http', 'Transfer', function TransferController($scope, $location, $http, Transfer) {
        this.transfer = function() {
          var data = {
            account_number: this.account,
            amount: this.amount
          };
          var transfer = Transfer.save({}, data, function(data) {
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