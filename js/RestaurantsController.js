restaurant.controller('RestaurantsCtrl', function RestaurantCtrl($scope) {

  $scope.restaurants = [];

  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName, cuisine: $scope.restaurantCuisine, address: $scope.restaurantAddress, contact: $scope.restaurantContact});
    $scope.restuarantName = null;
  };

  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
