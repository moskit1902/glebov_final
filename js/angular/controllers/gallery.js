restaurantApp
.filter('startFrom', function(){
  return function(input, start){
    start = +start;
    return input.slice(start);
  }
})
.controller('gallery', ['$scope', '$http', '$location', function($scope,$http, $location) {
		$scope.gallery = [];
		$http.get('json/gallery.json').success(function(response) {
	  	$scope.gallery = response;
	  })
	  .error(function(data, status) {
  		console.error('Repos error', status, data);
		});
	  $scope.showSubmenu = false;
	  $scope.toggle = function() {
	  	$scope.showSubmenu = !$scope.showSubmenu;
	  };
	  $scope.currentPage = 0;
	  $scope.itemsPerPage = 9;
	  $scope.firstPage = function() {
	    return $scope.currentPage == 0;
	  };
	  $scope.lastPage = function() {
	    var lastPageNum = Math.ceil($scope.gallery.length / $scope.itemsPerPage - 1);
	    return $scope.currentPage == lastPageNum;
	  };
	  $scope.numberOfPages = function(){
	    return Math.ceil($scope.gallery.length / $scope.itemsPerPage);
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