var app = angular.module("firstApp",[]);

app.controller("firstController", ["$scope", "$http", function(m, h){
    m.nombre = "CF";
    m.listPost = [];
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
    h.get("http://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        m.listPost = data;
    },function(error){

    });
}]);