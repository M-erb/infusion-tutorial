tutorialApp.directive('completedCheck', function() {
  return {
    replace: 'false',
    restrict: 'AE',
    template: '<h2>This is a great test</h2>',
    link: function(scope, elem, attrs) {

    }
  };
});
