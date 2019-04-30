var app = angular.module("firstApp",[]);

app.controller("firstController",  function($scope, $http){
    $scope.nombre = "CF";
    $scope.listPost = [];
    $scope.listPostx = [];
    $scope.newPost = {};
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

    $scope.logSession = function(){
        $http.post('http://vudc.capp.la/vudc/vudc-security-service/public/login', {
            username: $scope.username,
            password: $scope.password
        })
        .then(function(dataResponse){
            if(dataResponse.status == 200){
                $scope.result = "Usuario logueado";
            }else if(dataResponse.status == 404){
                $scope.result = "Usuario incorrecto";
            }
        }, function(error){
            console.log(error);
        });
    }

    $scope.listPost = $http.get("http://jsonplaceholder.typicode.com/posts")
    .then(function(info){
       return info;

    $http.get("http://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        $scope.listPost = data;
        console.log(data);
    },function(error){
    });

    });
}]);