var tutorialApp = angular.module('tutorialApp', ['ngAnimate','ui.router','ngclipboard','headroom','checklist-model','ngCookies','ngStorage']);

tutorialApp.controller('directoryCtrl', ['$scope', 'directory', '$cookies', '$localStorage', '$sessionStorage', function($scope, directory, $cookies, $localStorage, $sessionStorage){

  $scope.directory = directory.directory
  $scope.storage = $localStorage;
  $scope.pageClass = 'directory';

  // needed to add these checks to the scope as the factory does not have two way binding
  // Add one for every phase
  $scope.directory[1].check = $localStorage.directory.phase1=='done'
  $scope.directory[2].check = $localStorage.directory.phase2=='done'
  $scope.directory[3].check = $localStorage.directory.phase3=='done'
  $scope.directory[4].check = $localStorage.directory.phase4=='done'
  $scope.directory[5].check = $localStorage.directory.phase5=='done'

}]);

tutorialApp.controller('phaseCtrl', ['$scope', '$stateParams','directory', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, directory, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.phase = directory.directory[$stateParams.phaseIndex]
  $scope.storage = $localStorage
  $scope.pageClass = $scope.phase.class

}]);

tutorialApp.controller('tutorialCtrl', ['$scope', '$stateParams','directory', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, directory, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.tut = directory.directory[$stateParams.phaseIndex].tutList[$stateParams.tutIndex]
  $scope.storage = $localStorage
  $scope.pageClass = directory.directory[$stateParams.phaseIndex].class

}]);


//local storage notes
//{"phase1":"done","phase2":"done","phase3":"done","phase4":"done","phase5":"done","phase6":"done"}
