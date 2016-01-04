/*___________________plan.js____________________*/
angular.module('todoList.plan', [])
.controller('PlanCtrl', function($scope){
  $scope.plans = [];
  $scope.addPlan = function(){
    //Add task data into tasks array
    $scope.plans.push({
      goal: $scope.newPlan,
      subgoal1: $scope.subgoal1,
      subgoal2: $scope.subgoal2

    });
  };

});