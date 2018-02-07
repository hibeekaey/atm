// Register `complete` component, along with its associated controller and template
angular.
  module('atmApp').
  component('complete', {
    templateUrl: 'complete/complete.template.html',
    controller: ['$scope', '$location', '$timeout', '$http', function CompleteController($scope, $location, $timeout, $http) {
        this.show = true;
        $timeout(function () {
          location.href = '#!/scan';
        }, 2000);
    }]
  });