var tutorialApp = angular.module('tutorialApp', ['ngAnimate','ui.router','ngclipboard','headroom','checklist-model','ngCookies','ngStorage']);

tutorialApp.controller('directoryCtrl', ['$scope', 'directories', '$cookies', '$localStorage', '$sessionStorage', function($scope, directories, $cookies, $localStorage, $sessionStorage){

  $scope.directory = directories.directory
  $scope.storage = $localStorage;
  $scope.pageClass = 'directory';

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
