angular.module('todoList',[
  'todoList.list',
  'todoList.plan',
  'ngRoute'
  ])
.config(function($routeProvider){
  $routeProvider
  .when('/plan', {
    templateUrl: 'app/plan/plan.html',
    controller: 'PlanCtrl'
  })
  .when('/list', {
    templateUrl: 'app/list/list.html',
    controller: 'ListCtrl'
  })
  .otherwise({redirectTo: '/list'});
});