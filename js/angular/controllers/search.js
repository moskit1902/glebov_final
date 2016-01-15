restaurantApp
	.controller('search', ['$scope', '$http', '$location', function($scope,$http, $location) {
		$http.get('json/food.json').success(function(response) {
	  	var searchButton = document.querySelector('.search a');
	  	var userSearch = function() {
	  		var userInput = document.getElementById('search').value.toLowerCase();
	  		$scope.items = [];
	  		for (var i in response) {
	  			if (userInput) {
		  			response[i].forEach(
		  				function(item) {
		  					if (item.position.toLowerCase().indexOf(userInput) !== -1) {
		  							$scope.items.push(item);
		  						}
		  					}
		  				)
		  			}
	  			}
	  		};
	  	searchButton.onclick = function(){userSearch()};
	  	userSearch();
	  	$scope.show = function() {
	  		return !$scope.items.length
	  		}
		})
	  .error(function(data, status) {
  		console.error('Repos error', status, data);
		});
	}]);