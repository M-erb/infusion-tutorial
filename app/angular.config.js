tutorialApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$localStorageProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $localStorageProvider){

  $locationProvider.html5Mode(true);
  $localStorageProvider.setKeyPrefix('');

  $stateProvider
    .state('directory', {
      url: '/',
      templateUrl: 'views/directory.html',
      controller: 'directoryCtrl'
    });
  $stateProvider
    .state('phase1', {
      url: '/get-started',
      templateUrl: 'views/get-started.html',
      controller: 'phase1'
    });

  $stateProvider
    .state('phase2', {
      url: '/users',
      templateUrl: 'views/users.html',
      controller: 'phase2'
    });


  $urlRouterProvider.otherwise('directory');
}])











/* -ngRoute-
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
*/
