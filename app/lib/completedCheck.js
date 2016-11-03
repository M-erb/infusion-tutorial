tutorialApp.directive('completedCheck', function() {
  return {
    replace: 'false',
    restrict: 'AE',
    scope: {
      myvalue: '='
    },
    link: function(scope, element, attributes) {
      scope.text = attributes["myColors"];
    //  console.log(scope.myvalue);
    //  console.log(attrs)
    //  console.log(elem)
    //  elem.style.backgroundColor = 'red';


      console.log(scope.text);
    }
  };
});
