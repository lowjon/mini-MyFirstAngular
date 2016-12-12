angular.module('friendsList').controller('mainCtrl', function ($scope) {

  $scope.friends = ['Rick','Morty','Mr. Poopybutthole','Jerry'];

  $scope.addFriend = function() {

    var newFriend = $scope.newFriend;
    $scope.friends.push(newFriend);
// try to clear the input after you click the button


  };

});
