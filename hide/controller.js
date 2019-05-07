angular.module("hide", [])
.controller("hideController", function($scope, $http){
    $scope.posts = [];
    $scope.newPost = {};
    
    $http.get("http://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        console.log(data);
        $scope.posts = data;
    });
});