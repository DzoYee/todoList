/*___________________plan.js____________________*/
angular.module('todoList.plan', [])
  .controller('PlanCtrl', function($scope, Plan) {
    $scope.plans = [];
    $scope.goalForms = [{}];
    $scope.subgoals = {};


    $scope.addSubgoal = function(){
      $scope.goalForms.push({id: "subgoal" + $scope.subgoals.length});
    };  
    $scope.addPlan = function() {
      //Add task data into tasks array
      $scope.plans.push($scope.createPlan());

      //Save somewhere where all controllers can access
      Plan.addPlan($scope.createPlan());
    };

    $scope.createPlan = function() {
      var plan = { goal: $scope.newPlan };
      for (var prop in $scope.subgoals){
        plan[prop] = subgoals[prop];
      }
      // console.log(plan);
      return plan;
    };
    

  });