var tutorialApp = angular.module('tutorialApp', ['ngAnimate','ui.router','ngclipboard','headroom','checklist-model','ngCookies','ngStorage']);

tutorialApp.controller('directoryCtrl', ['$scope', 'directory', '$cookies', '$localStorage', '$sessionStorage', function($scope, directory, $cookies, $localStorage, $sessionStorage){

  $scope.directory = directory.directory
  $scope.storage = $localStorage;
  $scope.pageClass = 'directory';

}]);

tutorialApp.controller('phaseCtrl', ['$scope', '$stateParams','directory', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, directory, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.storage = $localStorage
  $scope.phase = directory.directory[$stateParams.phaseIndex]
  $scope.pageClass = $scope.phase.class

}]);

tutorialApp.controller('tutorialCtrl', ['$scope', '$stateParams','directory', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, directory, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.tutList = directory.directory[$stateParams.phaseIndex].tutList[$stateParams.tutIndex]
  $scope.storage = $localStorage
  $scope.pageClass = directory.directory[$stateParams.phaseIndex].class

  $scope.pages = $scope.tutList.tutorialPages
  $scope.currentIndex=0;

  $scope.prev=function(){
    $scope.currentIndex>0?$scope.currentIndex--:$scope.currentIndex=$scope.pages.length-1;
  };

  $scope.next=function(){
    $scope.currentIndex<$scope.pages.length-1?$scope.currentIndex++:$scope.currentIndex=$scope.pages.length-1;
  };

  $scope.$watch('currentIndex',function(){
    $scope.pages.forEach(function(page){
      page.visible=false;
    });
    $scope.pages[$scope.currentIndex].visible=true;
  });

}]);


//local storage notes
//{"phase1":"done","phase2":"done","phase3":"done","phase4":"done","phase5":"done","phase6":"done"}
