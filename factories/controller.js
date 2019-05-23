var app = angular.module("ToDoList", ["LocalStorageModule"]);

app
.factory('ToDoServiceFactory', function(localStorageService){
   //El service se ejecuta como un constructor
   //El factory se ejecuta como una función que retorna un objeto
   var toDoService = {};

   toDoService.key = "todo-list";
   if(localStorageService.get(toDoService.key)){
      toDoService.activities = localStorageService.get(toDoService.key);
   } else {
      toDoService.activities = [];
   }

   toDoService.add = function(activity){
      toDoService.activities.push(activity);
      toDoService.updateLocalStorage();
   }

   toDoService.updateLocalStorage = function(){
      localStorageService.set(toDoService.key, toDoService.activities);
   }

   toDoService.clean = function(){
      toDoService.activities = [];
      toDoService.updateLocalStorage();
      return toDoService.getAll();
   }

   toDoService.getAll = function(){
      return toDoService.activities;
   }

   toDoService.removeItem = function(item){
      toDoService.activities = toDoService.activities.filter(function(activity){
        return activity !== item;
      });
      toDoService.updateLocalStorage();
      return toDoService.getAll();
   }
   return toDoService;

})
.controller('secondController', function($scope, ToDoServiceFactory){
   $scope.todo =  ToDoServiceFactory.getAll();
   $scope.newActv = {};

   $scope.addActv = function(){
      ToDoServiceFactory.add($scope.newActv);
      $scope.newActv = {};
   }

   $scope.removeActv = function(item){
      $scope.todo = ToDoServiceFactory.removeItem(item);
   }

   $scope.clean = function(){
      $scope.todo = ToDoServiceFactory.clean();
   }
});
