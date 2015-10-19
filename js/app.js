(function(){
  var app = angular.module('angularDemo5', ['tank-directives']);

  app.controller('DemoController', ['$http', function($http){
    var demo = this;
    demo.vehicles = [];
    $http.get('json/tanks.json').success(function(data){
      demo.vehicles = data;
    });
  }]);

  app.controller("ReviewController", function(){

      this.review = {};

      this.addReview = function(product){
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
      };
    });

    app.directive("tankTabs", function() {
        return {
           restrict: "E",
           templateUrl: "html/tank-tabs.html",
           controller: function() {
              this.tab = 1;

              this.setTab = function(newValue){
                   this.tab = newValue;
              };

              this.isSet = function(tabName){
                   return this.tab === tabName;
              }
           },
           controllerAs: "tab"
        };
    });

})();
