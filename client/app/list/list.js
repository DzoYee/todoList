/*___________________list.js____________________*/
angular.module('todoList.list', [])
  .controller('ListCtrl', function($scope, Plan) {
    $scope.plans = [];
    var getAll = function() {
      for (var i = 0; i < Plan.storage.length; i++) {
        $scope.plans.push(Plan.storage[i]);
      }
    };
    getAll();
  });