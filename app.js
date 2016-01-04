angular.module('todolist')
.config(function($routeProvider){
  $routeProvider
  .when('/plan', {
    templateUrl: 'plan/plan.html',
    controller: ''
  });
});