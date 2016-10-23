// angular.module('checkCookies', []).directive('myColor',
//   function() {
//     return {
//       model: {
// 		      directoryCookie: '@'
//       },
//       link: function($scope, element, attrs, controller, $cookies) {
//         console.log('myCookie name: '+attrs.directoryCookie);
//         if ($cookies.get('getStarted') == 'done') {
//           //importDirec.style.backgroundColor = "#fff";
//           //importDirec.style.filter = 'grayscale(0%)';
//           console.log('Get started is done');
//         }
//       }
//     };
//   }
// );

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

  $scope.createCookie = function(color) {
    $cookies.put('myCookie', color);
    $scope.myCookie = $cookies.get('myCookie');
    console.log('cookie updated: '+$scope.myCookie);
  }

  $scope.setColor = function(card) {
    // get started check
    if ($cookies.get('getStarted') == 'done') {
      console.log('Get started is done');
      return {'background-color':'#fff','filter':'grayscale(0)'};
    }else {
      console.log('Get started is NOT done');
      return {'background-color':'rgb(240,240,240)','filter':'grayscale(1)'};
    }
  };

  $scope.myCookie = $cookies.get('myCookie');
  //$scope.boxColor = 'black';

  console.log('myCookie log: '+$cookies.get('myCookie'));



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

  $scope.displayCookie = $cookies.get('myCookie');

  $scope.getStartedDone = function() {
    $cookies.put('getStarted', 'done');
  };

}]);







tutorialApp.controller('importCtrl', ['$scope', '$http', '$cookies', function($scope, $http, $cookies){

  $http.get('data/get-started.json').success(function(Data){
    $scope.import = Data;
  });

  $scope.pageClass = 'importContacts';

}]);
