angular.module('myApp')
  .factory('reposFactory', function ($http) {
    console.log('hola que tal')
    function getRepos ($user) {
      return $http.get('https://api.github.com/users/"' + $user + '"/repos')
    }

    return {
      getRepos: getRepos
    }
  })
