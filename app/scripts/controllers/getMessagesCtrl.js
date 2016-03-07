'use strict';

angular
	.module('chatApp')
  .controller('getMessagesCtrl', function ($scope, AjaxFactory) {
        // getMessages-funktio AjaxFactorystä
        var request = AjaxFactory.getMessages();
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
            //$scope.messages = response.data;
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
  });