var tutorialApp = angular.module('tutorialApp', ['ngAnimate','ui.router','ngclipboard','headroom','checklist-model','ngCookies','ngStorage']);

tutorialApp.controller('directoryCtrl', ['$scope', 'directories', '$cookies', '$localStorage', '$sessionStorage', function($scope, directories, $cookies, $localStorage, $sessionStorage){

  $scope.directory = directories.directory
  $scope.storage = $localStorage;
  $scope.pageClass = 'directory';

  // needed to add these checks to the scope as the factory does not have two way binding
  $scope.directory[1].check = $localStorage.directory.phase1=='done'
  $scope.directory[2].check = $localStorage.directory.phase2=='done'
  $scope.directory[3].check = $localStorage.directory.phase3=='done'
  $scope.directory[4].check = $localStorage.directory.phase4=='done'
  $scope.directory[5].check = $localStorage.directory.phase5=='done'

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
