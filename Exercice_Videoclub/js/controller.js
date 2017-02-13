
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
      })angular.module('appFilm')
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
