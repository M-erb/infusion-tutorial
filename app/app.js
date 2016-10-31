var tutorialApp = angular.module('tutorialApp', ['ngAnimate','ngRoute','ngclipboard','headroom','checklist-model','ngCookies','ngStorage']);


tutorialApp.config(['$routeProvider','$locationProvider', '$localStorageProvider', function($routeProvider, $locationProvider, $localStorageProvider){

  $locationProvider.html5Mode(true);
  $localStorageProvider.setKeyPrefix('');

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

tutorialApp.controller('directoryCtrl', ['$scope', '$http', '$cookies', '$localStorage', '$sessionStorage', function($scope, $http, $cookies, $localStorage, $sessionStorage){

  $http.get('data/directory.json').success(function(Data){
    $scope.directory = Data;
  });

  $scope.pageClass = 'directory';

  $scope.setColor = function() {
    // get started check
    if ($localStorage.getingStarted == 'done') {
      return {'background-color':'#fff','filter':'grayscale(0)'};
    }else {
      return {'background-color':'rgb(240,240,240)','filter':'grayscale(1)'};
    }
  };



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






tutorialApp.controller('getStartedCtrl', ['$scope', '$http', '$cookies', '$localStorage', '$sessionStorage', function($scope, $http, $cookies, $localStorage, $sessionStorage){

  $http.get('data/get-started.json').success(function(Data){
    $scope.directory = Data;
  });

  $scope.pageClass = 'getStarted';

  $scope.getStartedDone = function() {
    $localStorage.getingStarted = 'done';
  };


  $scope.testBtn = function() {
    $localStorage.test.value1 = 'look at this cool test';
    $localStorage.test.value2 = 'No way, is this is working?';
  }

}]);







tutorialApp.controller('importCtrl', ['$scope', '$http', '$cookies', function($scope, $http, $cookies){

  $http.get('data/get-started.json').success(function(Data){
    $scope.import = Data;
  });

  $scope.pageClass = 'importContacts';

}]);
