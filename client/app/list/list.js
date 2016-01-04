/*___________________list.js____________________*/
angular.module('todoList.list', [])
.controller('ListCtrl', function($scope){
  $scope.tasks = [];
  $scope.addTask = function(){
    //Add task data into tasks array
    $scope.task.push($scope.task);
  };

});