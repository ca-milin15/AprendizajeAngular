var app = angular.module("firstApp",[]);

app.controller("firstController", ["$scope", "$http", function(m, h){
    m.nombre = "CF";
    m.comentarios = [
        {
            nombre: "Comentario 1",
            creadoPor: "Camilo 1"
        },
        {
            nombre: "Comentario 2",
            creadoPor: "Camilo 2"
        }
    ];

    m.agregarComentario = function(){
        m.comentarios.push({nombre: m.nombreNuevo, creadoPor: "Camilo"});
    }
}]);