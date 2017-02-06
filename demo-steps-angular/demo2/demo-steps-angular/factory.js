angular.module('myApp')
  .factory('reposFactory', function($http) {

      function getRepos(username) {
        return $http.get('https://api.github.com/users/' + username + '/repos')
      }

      return {
        getRepos: getRepos
      }

  })