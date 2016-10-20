var tutorialApp = angular.module('tutorialApp', ['ngAnimate','ngRoute','ngclipboard','headroom','checklist-model','ngCookies']);


tutorialApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl:'views/directory.html',
      controller:'directoryCtrl'
    })
    .when('/get-started', {
      templateUrl:'views/get-started.html',
      controller:'getStartedCtrl'
    })
    .when('/import-contacts', {
      templateUrl:'views/import-contacts.html',
      controller:'importCtrl'
    }).otherwise({
      redirectTo:'/'
    });

}]);

tutorialApp.controller('directoryCtrl', ['$scope', '$http', '$cookies', function($scope, $http, $cookies){

  $http.get('data/directory.json').success(function(Data){
    $scope.directory = Data;
  });

  $scope.pageClass = 'directory';

  //checkbox properties
  //---> checklist-model set up
  /*
  $scope.chatCats = [
    {
      name: 'hellos',
      shortName: 'hellos'
    },
    {
      name: 'Service Referrals - VAS',
      shortName: 'ServiceReferrals-VAS'
    }
  ];

  $scope.chatCatsSelected = {
    name: []
  };

  $scope.uncheckAll = function() {
    $scope.chatCatsSelected.name = [];
  };
  */

}]);

tutorialApp.controller('getStartedCtrl', ['$scope', '$http', '$cookies', function($scope, $http, $cookies){

  $http.get('data/get-started.json').success(function(Data){
    $scope.directory = Data;
  });

  $scope.pageClass = 'getStarted';

}]);

tutorialApp.controller('importCtrl', ['$scope', '$http', '$cookies', function($scope, $http, $cookies){

  $http.get('data/get-started.json').success(function(Data){
    $scope.import = Data;
  });

  $scope.pageClass = 'importContacts';

}]);
