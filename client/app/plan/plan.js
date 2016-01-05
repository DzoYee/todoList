/*___________________plan.js____________________*/
angular.module('todoList.plan', [])
  .controller('PlanCtrl', function($scope, Plan) {
    $scope.plans = [];
    $scope.addPlan = function() {
      //Add task data into tasks array
      var plan = {
        goal: $scope.newPlan,
        subgoal1: $scope.subgoal1,
        subgoal2: $scope.subgoal2
      };
      $scope.plans.push(plan);

      //Save somewhere where all controllers can access
      Plan.addPlan(plan);

    };

  });