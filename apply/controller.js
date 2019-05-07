angular.module("apply", [])
.controller("applyController", function($scope){
    $scope.nombre = "Camilo";
    /*setTimeout(function(){
        $scope.$apply(function(){
            $scope.nombre = "Codigo facilito";
        })
    }, 2000)*/
    
    document.querySelector("#boton").addEventListener("click", function(){
        $scope.$apply(function(){
            $scope.nombre = "Codigo facilito";
        });
    });
});