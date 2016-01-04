angular.module('todoList',[
  'todoList.list',
  'todoList.plan',
  'ngRoute'
  ])
.config(function($routeProvider){
  $routeProvider
  .when('/plan', {
    templateUrl: 'plan/plan.html',
    controller: 'PlanCtrl'
  })
  .when('/list', {
    templateUrl: 'list/list.html',
    controller: 'ListCtrl'
  });
});