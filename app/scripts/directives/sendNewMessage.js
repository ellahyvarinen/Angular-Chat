'use strict';

angular
  .module('chatApp')
  .directive('sendNewMessage', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/sendNewMessageModal.html'
    };
  });