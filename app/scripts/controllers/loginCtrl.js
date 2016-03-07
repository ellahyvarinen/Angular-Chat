'use strict';

var uID = '';

angular
	.module('chatApp')
  .controller('LoginCtrl', function($scope, AjaxFactory) {
    
	var storageData = null;
	
	$scope.logToChat = function() {
      // data lomakkeesta
		if (storageData === null) {
			var data = {
        name: $scope.user
      };
		} else {
			var data = storageData;
		}
      
      // kutsu login-funktiota AjaxFactorystä
      var request = AjaxFactory.login(data);
      request.then(function(response) {
        // tee vastauksella jotain
        $('.profileName').html(response.data.name);
        $('.profileImage').attr('src', response.data.profileImage);
        $('.loginForm').hide();
        $('#profile').show();
        $('input[name="uID"]').attr('value', response.data.uID);
				// Store
						if (window.localStorage.getItem('userName') 	=== null) {
							window.localStorage.setItem('userName', $scope.user);
						}
        console.log(response.data);
      }, function(error) {
        // tee virheellä jotain
        console.log(error.data);
      });
    };
	//.localStorage.removeItem('userName');
				console.log(window.localStorage.getItem('userName'));
		if (window.localStorage.getItem('userName') !== null) {
			
			// Retrieve
			if (window.localStorage.getItem('userName') !== null) {
				storageData = {
					name: window.localStorage.getItem('userName')
				};
				$scope.logToChat();
			}
		}
	
  });
