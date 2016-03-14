var app = angular.module('StreamUtils', ['ngRoute', 'ngAnimate']);
app.controller('MainController', function($scope){
  angular.element(document).ready(function() {
    setTimeout(function() {
      angular.element(document.body).addClass('loaded');
    }, 3000);
    $('.button-collapse').sideNav();
  });
});
app.controller('FollowerAlertController', function($scope){
  $scope.currentStatus = "Disabled";
  $scope.disabled = true;
});
app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/followerAlert',{
    templateUrl: 'partials/followerAlert.html',
    controller: 'FollowerAlertController',
  }).otherwise({
    templateUrl: 'partials/index.html',
    controller: 'MainController',
  });
}]);
