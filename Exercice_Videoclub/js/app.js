
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

// Controlador para insertar titulos h1
angular.module('appFilm')
.controller('myController', function ($scope) {
  $scope.title1 = 'Popular Movies'
  this.title2 = 'Upcoming Movies'
  this.title3 = 'Now Playing Movies'
  this.title4 = 'Top Rated Movies'

  $scope.query = ''
})

// Controladores para recoger las peticiones del factory
angular.module('appFilm')
.controller('PopularController', function ($scope, MoviesFactory) {
  MoviesFactory.getPopular()
      .then(function (response) {
        $scope.movies = response.data.results
      })
})
angular.module('appFilm')
.controller('UpcomingController', function ($scope, MoviesFactory) {
  MoviesFactory.getUpcoming()
      .then(function (response) {
        $scope.movies = response.data.results
      })
})
angular.module('appFilm')
.controller('NowplayController', function ($scope, MoviesFactory) {
  MoviesFactory.getNowplaying()
      .then(function (response) {
        $scope.movies = response.data.results
      })
})
angular.module('appFilm')
.controller('TopRatedController', function ($scope, MoviesFactory) {
  MoviesFactory.getToprated()
      .then(function (response) {
        $scope.movies = response.data.results
      })
})

// Peeticiones para recoger los datos de la api movies
angular.module('appFilm')
  .factory('MoviesFactory', function ($http) {
    var apiKey = 'f9caab58bb6b559dcf053a718c8bf40d'

    function getPopular () {
      var url = 'https://api.themoviedb.org/3/movie/popular?api_key=<%KEY%>'
      var url = url.replace('<%KEY%>', apiKey)
      return $http.get(url)
    }

    function getUpcoming () {
      var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=<%KEY%>'
      var url = url.replace('<%KEY%>', apiKey)
      return $http.get(url)
    }

    function getNowplaying () {
      var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=<%KEY%>'
      var url = url.replace('<%KEY%>', apiKey)
      return $http.get(url)
    }

    function getToprated () {
      var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=<%KEY%>'
      var url = url.replace('<%KEY%>', apiKey)
      return $http.get(url)
    }

    return {
      getPopular: getPopular,
      getUpcoming: getUpcoming,
      getNowplaying: getNowplaying,
      getToprated: getToprated

    }
  })

