'use strict';

angular
  .module('chatApp')
  .controller('saveProfileImageCtrl', function($scope, AjaxFactory) {
    $scope.saveImage = function() {
      var fd = new FormData(document.getElementById('imageForm'));
			
      // saveImage-funktio AjaxFactorystä
      var request = AjaxFactory.saveImage(fd);
      request.then(function(resp) {
        console.log(resp.data);
      }, function(error) {
        console.log(error.data);
      });
    };
  });
