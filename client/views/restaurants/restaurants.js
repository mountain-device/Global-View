/*
* Restaurant Controller. Alows for gathering restaurants from Yelp.
*/
angular.module('restaurants', ['globalMethods', 'storedData'])
.controller('RestaurantsController', function ($scope, StoredData, GlobalMethods) {
  $scope.data = StoredData;
  $scope.GlobalMethods = GlobalMethods;
  console.log("RestaurantsController: ", $scope.data);
});