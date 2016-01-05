angular.module('todoList.services', [])
.factory('Plan', function(){
  var storage = [];
  var addPlan1 = function(plan){
    storage.push(plan);
  };
  return {
    storage: storage,
    addPlan1: addPlan1
  };
});