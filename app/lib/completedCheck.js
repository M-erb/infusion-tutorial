tutorialApp.directive('completedCheck', function() {
  return {
    replace: 'false',
    restrict: 'AE',
    scope: {
      myvalue: '='
    },
    link: function(scope, elem, attrs) {
    //  console.log(scope.myvalue);
    //  console.log(attrs)
    //  console.log(elem)
      var colors = 'red';
    //  elem.style.backgroundColor = 'red';

      console.log(elem);
    }
  };
});
