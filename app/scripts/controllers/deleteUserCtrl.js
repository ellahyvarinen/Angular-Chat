'use strict';

angular
	.module('chatApp')
  .controller('deleteUserCtrl', function ($scope, AjaxFactory) {
    $scope.deleteUser = function(){
        // deleteUser-funktio AjaxFactorystä
        var request = AjaxFactory.deleteUser($scope.user);
        request.then(function (response) {
            console.log(response.data);
        }, function(error){
            console.log(error.data);
        });
    };
  });