tutorialApp.directive('completedCheck', function() {
  return {
    replace: 'false',
    restrict: 'AE',
    scope: true,
    link: function(scope, element, attributes) {
      scope.text = attributes["completedCheck"]

      element.context.style.backgroundColor = scope.text
    }
  };
});

/*
articles finding usful to figure this out:
http://stackoverflow.com/questions/17900201/how-to-access-parent-scope-from-within-a-custom-directive-with-own-scope-in-an

http://stackoverflow.com/questions/14049480/what-are-the-nuances-of-scope-prototypal-prototypical-inheritance-in-angularjs


*/
