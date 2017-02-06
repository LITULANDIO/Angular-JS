angular.module('myApp')
  .controller('reposController', function($scope, reposFactory) {

    // $http.get vs $.ajax

    reposFactory.getRepos()
      .then( function(response) {
        $scope.repos = response.data
      })

    $scope.addName = function(e) {
      e.preventDefault()
      $scope.repos.push({ name: $scope.newName });
      $scope.newName = ""
    }

    $scope.removeElement = function(index) {
      $scope.repos.splice(index,1)
    }

  })