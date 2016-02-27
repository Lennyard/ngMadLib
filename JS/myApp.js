var app = angular.module("myApp", []);

app.controller("MyCtrl", function($scope){
  $scope.isHidden = true;
   $scope.hideParagraph = function(){
    $scope.isHidden = !$scope.isHidden;
  };
});