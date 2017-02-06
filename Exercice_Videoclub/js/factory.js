
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
