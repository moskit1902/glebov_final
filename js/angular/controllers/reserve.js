restaurantApp.controller('reserve', function($scope, $firebase) {
  $scope.showForm = true;
  var ref = new Firebase("https://intense-fire-6011.firebaseio.com/days/monday/tables");  
   var fb = $firebase(ref);
  var syncObject = fb.$asObject();
  syncObject.$bindTo($scope, 'tables');
  $scope.userInput = {
    userName: '',
    userPhoneNumber: '',
    userChoice: '',
    userTime: ''
  };
  $scope.valid = function() {
    return !($scope.userInput.userPhoneNumber == null || $scope.userInput.userTime == '' || $scope.userInput.userName == '');
  };
  $scope.showError = false;
  $scope.err = function() {
    $scope.showError = true;
  };
  $scope.book = function(table) {
    $scope.showError = false;
    if($scope.userInput.userChoice == table) {
      $scope.userInput.userChoice = '';
    }
    else {
      $scope.userInput.userChoice = table;
    };
};
    $scope.ready = function() {
        if (!$scope.userInput.userChoice) {
           return  $scope.err();
        }
        else {
            var table = $scope.userInput.userChoice;
            table.userName = $scope.userInput.userName;
            table.userPhoneNumber = $scope.userInput.userPhoneNumber;
            table.userTime = $scope.userInput.userTime;
            table.booked = true;
            table.when =  new Date().toString();
            $scope.showForm = false;
            setTimeout(function(){window.location.href = '#/'}, 1500);
      }
    }
  
});