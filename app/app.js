var tutorialApp = angular.module('tutorialApp', ['ngAnimate','ui.router','ngclipboard','headroom','checklist-model','ngCookies','ngStorage']);

tutorialApp.controller('directoryCtrl', ['$scope', '$http', '$cookies', '$localStorage', '$sessionStorage', function($scope, $http, $cookies, $localStorage, $sessionStorage){

  $scope.storage = $localStorage
  $scope.pageClass = 'directory';
  //house keeping for local storage
  var directoryCheck = function() {
    if ($localStorage.directory == null) {
      $localStorage.directory = {}
    }
    if ($localStorage.phase1 == null) {
      $localStorage.phase1 = {}
    }
    if ($localStorage.phase2 == null) {
      $localStorage.phase2 = {}
    }
    if ($localStorage.phase3 == null) {
      $localStorage.phase3 = {}
    }
    if ($localStorage.phase4 == null) {
      $localStorage.phase4 = {}
    }
    if ($localStorage.phase5 == null) {
      $localStorage.phase5 = {}
    }
    if ($localStorage.phase6 == null) {
      $localStorage.phase6 = {}
    }
    if ($localStorage.phase7 == null) {
      $localStorage.phase7 = {}
    }
  }
  directoryCheck()

  $scope.directory = [{
    id: "phase1",
    title: "getting started",
    icon: "gettingstarted.png",
    view: "get-started",
    check: true
  }, {
    id: "phase2",
    title: "users",
    icon: "crm-icon.png",
    view: "users",
    check: $localStorage.directory.phase1=='done'
  }, {
    id: "phase3",
    title: "CRM - Contacts & Companies",
    icon: "contact.svg",
    view: "users",
    check: $localStorage.directory.phase2=='done'
  }, {
    id: "phase4",
    title: "Branding",
    icon: "contact.svg",
    view: "branding",
    check: $localStorage.directory.phase3=='done'
  }, {
    id: "phase5",
    title: "Sales Pipeline",
    icon: "contact.svg",
    view: "sales-pipeline",
    check: $localStorage.directory.phase4=='done'
  }, {
    id: "phase6",
    title: "Marketing",
    icon: "contact.svg",
    view: "marketing",
    check: $localStorage.directory.phase5=='done'
  }]

}]);

tutorialApp.controller('phase1', ['$scope', '$http', '$cookies', '$localStorage', '$sessionStorage', function($scope, $http, $cookies, $localStorage, $sessionStorage){
  $scope.storage = $localStorage
  $scope.pageClass = 'getStarted'

  $scope.getStartedList = [{
    id: "item1",
    title: "Familiarizing the Layout",
    view: "get-started",
    check: $localStorage.phase1.layout=='done'
  }, {
    id: "item2",
    title: "Importing Contacts",
    view: "users",
    check: $localStorage.phase1.import=='done'
  }]

}]);

tutorialApp.controller('phase2', ['$scope', '$http', '$cookies', '$localStorage', '$sessionStorage', function($scope, $http, $cookies, $localStorage, $sessionStorage){
  $scope.storage = $localStorage

  $scope.pageClass = 'importContacts';

}]);
