var tutorialApp = angular.module('tutorialApp', ['ngAnimate','ngRoute','ngclipboard','headroom','checklist-model','ngCookies','ngStorage']);

tutorialApp.controller('directoryCtrl', ['$scope', '$http', '$cookies', '$localStorage', '$sessionStorage', function($scope, $http, $cookies, $localStorage, $sessionStorage){

  $scope.storage = $localStorage
  $scope.pageClass = 'directory';
  /*
    $http.get('data/directory.json').success(function(Data){
      $scope.directory = Data;
    })
  */
  //house keeping for local storage
  var directoryCheck = function() {
    if ($localStorage.directory == null) {
      $localStorage.directory = {}
    }
    if ($localStorage.getStarted == null) {
      $localStorage.getStarted = {}
    }
  }
  directoryCheck()

  $scope.directory = [{
    id: "item1",
    title: "getting started",
    icon: "gettingstarted.png",
    view: "get-started",
    check: true
  }, {
    id: "item2",
    title: "users",
    icon: "crm-icon.png",
    view: "users",
    check: $localStorage.directory.gettingStarted=='done'
  }]

}]);

tutorialApp.controller('phase1', ['$scope', '$http', '$cookies', '$localStorage', '$sessionStorage', function($scope, $http, $cookies, $localStorage, $sessionStorage){
  $scope.storage = $localStorage

  $scope.pageClass = 'getStarted';

  $scope.getStartedDone = function() {
    $localStorage.getingStarted = 'done';
  };

  $scope.getStartedList = [{
    id: "item1",
    title: "Familiarizing the Layout",
    view: "get-started",
    check: $localStorage.getStarted.layout=='done'
  }, {
    id: "item2",
    title: "Importing Contacts",
    view: "users",
    check: $localStorage.getStarted.import=='done'
  }]

}]);

tutorialApp.controller('phase2', ['$scope', '$http', '$cookies', '$localStorage', '$sessionStorage', function($scope, $http, $cookies, $localStorage, $sessionStorage){
  $scope.storage = $localStorage

  $scope.pageClass = 'importContacts';

}]);
