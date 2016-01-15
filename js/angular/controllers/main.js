restaurantApp.
controller('mainCtrl', function($scope) {
	$scope.userEmailCheck = function() {
	    if (localStorage.user_email) {
			$scope.userEmail = localStorage.user_email;
			return true;
		}
		else {
			return false;
		}
	};
	$scope.logout = function() {
		var confirmUser = confirm('You are going to sign out. Are you sure?');
		if (confirmUser) {
			localStorage.clear();
		}
	};
});