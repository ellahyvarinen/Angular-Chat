'use strict';

angular
  .module('chatApp')
  .directive('saveProfileImage', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/saveProfileImageModal.html'
    };
  });