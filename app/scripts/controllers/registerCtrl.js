'use strict';

angular
	.module('chatApp')
  .controller('RegisterCtrl', function($scope, AjaxFactory) {
    $scope.register = function() {
      // data lomakkeesta
      var data = {
        name: $scope.user
      };
      // kutsu login-funktiota AjaxFactorystä
      var request = AjaxFactory.register(data);
      request.then(function(response) {
        // tee vastauksella jotain
				angular.element('#registerForm').modal('hide');
        console.log(response.data);
      }, function(error) {
        // tee virheellä jotain
        console.log(error.data);
      });
    };
  });
