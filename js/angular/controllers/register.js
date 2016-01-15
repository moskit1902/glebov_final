restaurantApp.controller('register', function($scope, $firebase) {
	var ref = new Firebase("https://intense-fire-6011.firebaseio.com/users");
	$scope.userInput = {
	userEmail: '',
	userPass:'',
	};
	$scope.isEmail = function (email) {
              var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              return regex.test(email);
            };
	$scope.create = function() {
		if ($scope.isEmail($scope.userInput.userEmail) && $scope.userInput.userPass.length > 5) {
			ref.createUser({
			email: $scope.userInput.userEmail,
			password: $scope.userInput.userPass
			}, function (error, userData) {
				if (error) {
					switch (error.code) {
						case "EMAIL_TAKEN":
							alert('The new user account cannot be created because the email is already in use.');
							break;
						case "INVALID_EMAIL":
							alert('The specified email is not a valid email.');
							break;
						default:
							alert("Error creating user:", error);
							}
						} 
				else {
					alert('Successfully created user account!');
					window.location.href = '#/login';
					}
				});
			}
			else {
				if(!$scope.isEmail($scope.userInput.userEmail)) {
					alert('Email not valid!');
				}
				else {
					alert('Minimum password length is 6 symbols!');
				}
			}	
		};
});