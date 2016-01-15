restaurantApp.controller('login', function($scope, $firebase) {
    var ref = new Firebase("https://intense-fire-6011.firebaseio.com/users");
    $scope.userInput = {
        userEmail: '',
        userPass:'',
        };
    $scope.isEmail = function (email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
        };
    $scope.login = function() {
        if ($scope.isEmail($scope.userInput.userEmail) && $scope.userInput.userPass.length > 5) {
        ref.authWithPassword({
        email: $scope.userInput.userEmail,
        password: $scope.userInput.userPass
        }, function(error, authData) {
            if (error) {
                alert("Login Failed!", error);
                } 
            else {
                alert("Authenticated successfully!", authData);
                localStorage.user_email = $scope.userInput.userEmail;
                window.location.href = '#/';
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