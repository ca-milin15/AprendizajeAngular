var app = angular.module("ToDoList", ["LocalStorageModule"]);

app.controller('secondController', function($scope, localStorageService){
 $scope.todo = [];

 $scope.addActv = function(){
     $scope.todo.push($scope.newactv);
     $scope.newactv= {};
 }
})