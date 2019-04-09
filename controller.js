var app = angular.module("firstApp",[]);

app.controller("firstController", function($scope){
    $scope.nombre = "CF";
    $scope.comentarios = [
        {
            nombre: "Comentario 1",
            creadoPor: "Camilo 1"
        },
        {
            nombre: "Comentario 2",
            creadoPor: "Camilo 2"
        }
    ];

    $scope.agregarComentario = function(){
        $scope.comentarios.push({nombre: $scope.nombreNuevo, creadoPor: "Camilo"});
    }
});