angular.module('todoList.services', [])
.factory('Plan', function(){
  var storage = [];
  var addPlan = function(plan){
    storage.push(plan);
  };
  return {
    storage: storage,
    addPlan: addPlan
  };
});