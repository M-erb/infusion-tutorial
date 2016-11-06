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
      controller:'phase1'
    })
    .when('/get-started/layout', {
      templateUrl:'views/get-started/layout.html',
      controller:'phase1'
    })
    .when('/users', {
      templateUrl:'views/users.html',
      controller:'phase2'
    }).otherwise({
      redirectTo:'/'
    });

}]);
