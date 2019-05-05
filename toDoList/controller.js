var app = angular.module("ToDoList", ["LocalStorageModule"]);

app.controller('secondController', function($scope, localStorageService){
 
 $scope.todo = [];
 if(localStorageService.get("todo-list")){
    $scope.todo = localStorageService.get("todo-list");
 }

 $scope.$watchCollection('todo-list', function(){
     console.log($scope.todo);
    localStorageService.set("todo-list", $scope.todo);
 });

 $scope.addActv = function(){
    $scope.todo.push($scope.newActv);
    $scope.newactv= {};
 }
}) 