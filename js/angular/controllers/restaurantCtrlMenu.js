restaurantApp
.filter('startFrom', function(){
  return function(input, start){
    start = +start;
    return input.slice(start);
  }
})
.controller('restaurantCtrlMenu', ['$scope', '$http', '$location', function($scope,$http, $location) {
		$scope.banquet = [];
		$scope.regular = [];
		$scope.wine = [];
		$http.get('json/food.json').success(function(response) {
	  	$scope.banquet = response.banquet;
	  	$scope.regular = response.regular;
	  	$scope.wine = response.wine;
	  })
	  .error(function(data, status) {
  		console.error('Repos error', status, data);
		});
	  $scope.showSubmenu = true;
	  $scope.toggle = function() {
	  	$scope.showSubmenu = !$scope.showSubmenu;
	  };
	  $scope.product = function() {
	  	if ($location.path() === '/menu/banquet') {
	  		return $scope.banquet;
	  	}
	  	else if ($location.path() === '/menu/regular') {
	  		return $scope.regular;
	  	}
	  	else if ($location.path() === '/menu/wine') {
	  		return $scope.wine;
	  	}
	  };
	  $scope.currentPage = 0;
	  $scope.itemsPerPage = 10;
	  $scope.firstPage = function() {
	    return $scope.currentPage == 0;
	  };
	  $scope.lastPage = function() {
	    var lastPageNum = Math.ceil($scope.product().length / $scope.itemsPerPage - 1);
	    return $scope.currentPage == lastPageNum;
	  };
	  $scope.numberOfPages = function(){
	    return Math.ceil($scope.product().length / $scope.itemsPerPage);
	  };
	  $scope.pages = function() {
	  	var arr = [];
	  	var  x = 1;
	  	while(x < $scope.numberOfPages() + 1) {
	  		arr.push(x);
	  		x++;
	  	};
	  	return arr 
	  };
	  $scope.pageSet = function(page) {
	  	$scope.currentPage = page - 1;
	  }
	  $scope.startingItem = function() {
	    return $scope.currentPage * $scope.itemsPerPage;
	  };
	  $scope.pageBack = function() {
	    $scope.currentPage = $scope.currentPage - 1;
	  };
	  $scope.pageForward = function() {
	    $scope.currentPage = $scope.currentPage + 1;
	  };

		$scope.sortField = undefined;
		$scope.reverse  = false;
		$scope.sort = function(fieldName) {
			if ($scope.sortField === fieldName) {
				$scope.reverse = !$scope.reverse;
			}
			else {
				$scope.sortField = fieldName;
				$scope.reverse = false;
			}
		};
	}]);