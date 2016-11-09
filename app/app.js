var tutorialApp = angular.module('tutorialApp', ['ngAnimate','ui.router','ngclipboard','headroom','checklist-model','ngCookies','ngStorage']);

tutorialApp.controller('directoryCtrl', ['$scope', 'directories', '$cookies', '$localStorage', '$sessionStorage', function($scope, directories, $cookies, $localStorage, $sessionStorage){

  $scope.directory = directories.directory
  $scope.storage = $localStorage;
  $scope.pageClass = 'directory';

  var directoryCheck = function() {
    //house keeping for local storage
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

}]);

tutorialApp.controller('phase', ['$scope', '$stateParams','directories', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams,directories, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.directory = directories.directory[$stateParams.id]
  $scope.storage = $localStorage
  $scope.pageClass = $scope.directory.id

}]);

tutorialApp.controller('phase2', ['$scope', '$http', '$cookies', '$localStorage', '$sessionStorage', function($scope, $http, $cookies, $localStorage, $sessionStorage){
  $scope.storage = $localStorage

  $scope.pageClass = 'phase2';

}]);


//local storage notes
//{"phase1":"done","phase2":"done","phase3":"done","phase4":"done","phase5":"done","phase6":"done"}
