/*___________________plan.js____________________*/
angular.module('todoList.plan', [])
  .controller('PlanCtrl', function($scope, Plan) {
    $scope.plans = [];
    $scope.forms = [];
    $scope.subgoals = {};


    $scope.addForm = function(){
      $scope.forms.push({id: "subgoal" + ($scope.forms.length + 1)});
    };  
    $scope.addPlan = function() {
      //Add task data into tasks array
      $scope.plans.push($scope.createPlan());

      //Save somewhere where all controllers can access
      Plan.addPlan1($scope.createPlan());
    };

    $scope.createPlan = function() {
      var plan = { goal: $scope.newPlan, subgoals:{} };
      console.log("SubGoal Obj: ", $scope.subgoals);
      for (var prop in $scope.subgoals){
        plan.subgoals[prop] = $scope.subgoals[prop];
      }
      // console.log(plan);
      return plan;
    };
    

  });