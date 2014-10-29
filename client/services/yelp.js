/*
*  Grabs Photos from instagram
*/
angular.module('restaurants', [])
.factory('Restaurants', function($http) {
  /**
  * @function
  * @memberof AngularModule_Factories.Yelp
  * @description Contact Server to grab popular businesses and restaurants for current city and stores the results in [StoredData.photos]{@link AngularModule_Factories.StoredData}
  * @param {object} request Request object for request
  * @param {string} request.city Name of City
  * @param {string} request.state Abbreviation of State
  * @param {date} request.date Current Time in UTC
  * @param {string} request.query Search Query for Services
  */
  var getRestaurants = function(request) {
    return $http({
      method: 'GET',
      url: 'api/yelp',
      params: request
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.error(error);
    })
  };

  /**
  * @class AngularModule_Factories.Instagram
  * @memberof AngularModule_Factories
  * @description Angular Factory: This module contains all functionality to interact with instagram
  * @property {function} getPhotos Contact Server to Grab Photos on trending topic for current city
  */
  return {
    getRestaurants: getRestaurants
  };
});