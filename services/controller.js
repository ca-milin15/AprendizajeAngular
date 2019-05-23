var app = angular.module("ToDoList", ["LocalStorageModule"]);

app
.service('ToDoServiceFactory', function(localStorageService){
    //El service se ejecuta como un constructor
    //El factory se ejecuta como una función que retorna un objeto
    
   this.key = "todo-list";
   if(localStorageService.get(toDoService.key)){
        this.activities = localStorageService.get(toDoService.key);
   } else {
        this.activities = [];
   }

    this.add = function(activity){
        this.activities.push(activity);
        this.updateLocalStorage();
   }

   this.updateLocalStorage = function(){
      localStorageService.set(this.key, this.activities);
   }

   this.clean = function(){
    this.activities = [];
    this.updateLocalStorage();
      return this.getAll();
   }

   this.getAll = function(){
      return this.activities;
   }

   this.removeItem = function(item){
    this.activities = this.activities.filter(function(activity){
        return activity !== item;
    });

    this.updateLocalStorage();
    return this.getAll();
   }
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
})