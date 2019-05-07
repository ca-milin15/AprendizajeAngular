angular.module("filters", [])
.filter("removeHtml", function(){
    return function(texto){
        return String(texto).replace(/<[^>]+>/gm, '');
    }
})
.controller("filtersController", function($scope){
    $scope.html = "<p>hola mundo</p>";
    $scope.costo = 2;
    $scope.pruebaJson = {};
    $scope.pruebaJson.title = 'hola';
    $scope.pruebaJson.body = 'hola mundo';
});