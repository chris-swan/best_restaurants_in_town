restaurant.controller('RestaurantsCtrl', function RestaurantCtrl($scope) {

  $scope.restaurants = [];

  $scope.addRestaurant = function() {
    $scope.restaurnts.push({ name: $scope.RestaurantName});
    $scope.restuarantName = null;
  };

  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
