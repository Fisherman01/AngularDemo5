(function (){
  var app = angular.module('tank-directives', []);

  app.directive("tankDescriptions", function() {
        return {
          restrict: 'E',
          templateUrl: "html/tank-description.html"
        };
    });

      app.directive("tankReview", function() {
         return {
           restrict: 'E',
           templateUrl: "html/tank-review.html"
         };
      });

      app.directive("tankSpecs", function() {
         return {
           restrict: 'A',
           templateUrl: "html/tank-specs.html"
         };
      });

      app.directive("tankGallery", function() {
          return {
             restrict: 'E',
             templateUrl: "html/tank-gallery.html"
          };
      });
})();