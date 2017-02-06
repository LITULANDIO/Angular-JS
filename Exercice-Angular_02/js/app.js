var listApp = angular.module('listApp', [])

listApp.controller('listController', function ($scope, reposFactor) {
  $scope.students = [
    {
      'name': 'Stívali Serna',
      'mail': 'stivaliserna08@gmail.com',
      'github': 'https://github.com/stivaliserna'
    },
    {
      'name': 'Xavier Meroño',
      'mail': 'x.merono@gmail.com',
      'github': 'https://github.com/xmero'
    },
    {
      'name': 'Bijay Timilsina',
      'mail': 'bjtimi.007@hotmail.com',
      'github': 'https://github.com/bijay007'
    },
    {
      'name': 'Ernesto Parra',
      'mail': 'ernesto-parra@hotmail.com',
      'github': 'https://github.com/ERPG'
    },
    {
      'name': 'Francisco Lopez',
      'mail': 'frans.lopez.m@gmail.com',
      'github': 'https://github.com/FransLopez'
    },
    {
      'name': 'Ignasi Amargos',
      'mail': 'amargos.ignasi@gmail.com',
      'github': 'https://github.com/IggyA/js-exercises'
    },
    {
      'name': 'Jonas Rodon',
      'mail': 'jonasrodon@gmail.com',
      'github': 'https://github.com/JonasRodon'
    },
    {
      'name': 'Josep Otal',
      'mail': 'j.otal.pares@gmail.com',
      'github': 'https://github.com/josepotal'
    },
    {
      'name': 'Oscar Viciana',
      'mail': 'vicfer.oscar@gmail.com',
      'github': 'https://github.com/oviciana'
    },
    {
      'name': 'Alejandro Vazquez',
      'mail': 'alejovp@gmail.com',
      'github': 'https://github.com/alejovp'
    },
    {
      'name': 'Carles Far',
      'mail': 'litulandio@gmail.com',
      'github': 'https://github.com/LITULANDIO'
    },
    {
      'name': 'Ezequiel Cucchiararo',
      'mail': 'ezequiel.cucchiararo@gmail.com',
      'github': 'https://github.com/EzequielGomezCucchiararo'
    }
  ]




listApp.angular.module('myApp')
  listApp.factory('reposFactory', function($http) {
    $scope.reposUser = function(username) {
  return $http.get('https://api.github.com/users/"' + username + '"/repos')
    }

    return {
      reposUser: reposUser
    }
  })

    




// listApp.angular.module('myApp')
//   .factory('reposFactory', function ($http) {
//     function getRepos ($user) {
//       return $http.get('https://api.github.com/users/"' + $user + '"/repos')
//     }

//     return {
//       getRepos: getRepos
//     }
//   })
