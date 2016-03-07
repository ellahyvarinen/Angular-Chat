'use strict';

angular
    .module('chatApp')
    .controller('fileUpload', function ($scope, AjaxFactory) {
        $scope.saveImage = function () {
            var fd = new FormData(document.getElementById('imageForm'));
            var request = AjaxFactory.saveImage(fd);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
});
/*
angular.module('chatApp')
  .controller('imageCtrl', function($scope, AjaxFactory) {
    var file = $scope.myFile;
    $scope.saveImage = function() {
      // data lomakkeesta
      var imgData = new FormData(document.getElementById("imageForm"));
      $http.post('http://users.metropolia.fi/~ilkkamtk/chatApi/images', imgData, {
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }
        })
        // kutsu login-funktiota AjaxFactorystä
      var request = AjaxFactory.image(data);
      request.then(function(response) {
        // tee vastauksella jotain
        console.log(response.data);
      }, function(error) {
        // tee virheellä jotain
        console.log(error.data);
      });
    };
  });
*/
