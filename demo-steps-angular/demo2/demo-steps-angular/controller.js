angular.module('myApp')
  .controller('reposController', function($scope, reposFactory) {

    $scope.getUserRepos = function(e) {
      e.preventDefault()

      reposFactory.getRepos($scope.username)
        .then( function(response) {
          $scope.repos = response.data
        })

    }

    $scope.removeElement = function(index) {
      $scope.repos.splice(index,1)
    }

  })