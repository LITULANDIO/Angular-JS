
// Controlador para insertar titulos h1 

.controller('myController', function($scope) {


     		$scope.title1="Popular Movies";
     		this.title2="Upcoming Movies";
     		this.title3="Now Playing Movies";
     		this.title4="Top Rated Movies";
     	})


// Controladores para recoger las peticiones del factory

.controller('PopularController', function($scope,MoviesFactory) {

    MoviesFactory.getPopular()
      .then( function(response) {
        $scope.movies = response.data.results
      })
 })

.controller('UpcomingController', function($scope,MoviesFactory) {
 	MoviesFactory.getUpcoming()
      .then( function(response) {
        $scope.movies = response.data.results
      })
   })

.controller('NowplayController', function($scope,MoviesFactory) {
 	MoviesFactory.getNowplaying()
      .then( function(response) {
        $scope.movies = response.data.results
      })
   })

.controller('TopRatedController', function($scope,MoviesFactory) {
 	MoviesFactory.getToprated()
      .then( function(response) {
        $scope.movies = response.data.results
      })
   })