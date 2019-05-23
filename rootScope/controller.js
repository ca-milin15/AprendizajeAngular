angular.module("rootScope",[])
.run(function($rootScope){
    $rootScope.nombre = "Codigo"
})
.controller('controllerRootScope', function($scope){
    $scope.nombre = "hola";
})
.controller('controllerChild', function($scope){
});