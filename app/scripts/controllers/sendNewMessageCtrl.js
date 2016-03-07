'use strict';

angular
  .module('chatApp')
  .controller('sendMessageCtrl', function($scope, AjaxFactory) {
    $scope.sendMessage = function() {
      // data lomakkeesta
      var data = {
        message: $scope.message,
        uID: $scope.uID
      };
      // sendMessage-funktio AjaxFactorystä
      var request = AjaxFactory.postMessage(data);
      request.then(function(response) {
        // tee vastauksella jotain
				console.log(response.data);
				angular.element('#messageModal').modal('hide');
				$scope.message = '';
        
      }, function(error) {
        // tee virheellä jotain
        console.log(error.data);
      });
    };
  });
