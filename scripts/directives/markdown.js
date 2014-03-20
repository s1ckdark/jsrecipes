angular.module('MyApp')
  .directive('markdown', function($http) {
    var converter = new Showdown.converter();
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        attrs.$observe('link', function(link) {
          if (link){
            $http.get('posts/' + link).success(function(response) {
              var htmlText = converter.makeHtml(response);
              element.html(htmlText);
            });
          }
        });
      }
    }
  });