/*
* Tweet Controller (Depreciated) - Will work if used. Alows for gathering tweets directly.
*/
angular.module('restaurants', ['globalMethods', 'storedData','yelp'])
.controller('TweetsController', function ($scope, StoredData, GlobalMethods) {
  $scope.data = StoredData;
  $scope.GlobalMethods = GlobalMethods;
});