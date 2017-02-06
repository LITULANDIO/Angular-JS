 angular.module('appFilm', ['ngRoute'])
    .config(function ($routeProvider) {
 // Configuracion de las rutas del HTML

      $routeProvider // $routeProvider "palabra reservada" nos permite difinir las rutas

         .when('/movie', {
           templateUrl: 'templates/movie.html' // 1 ruta
         })

        .when('/popular', {
          templateUrl: 'templates/popular.html' // 2 ruta
        })

       .when('/upcoming', {
         templateUrl: 'templates/upcoming.html' // 3 ruta
       })

         .when('/playing', {
           templateUrl: 'templates/nowPlaying.html' // 4 ruta
         })
          .when('/top', {
            templateUrl: 'templates/topRated.html' // 5 ruta
          })
    })
