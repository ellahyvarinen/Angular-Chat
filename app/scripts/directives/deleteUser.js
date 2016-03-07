'use strict';

angular
  .module('chatApp')
  .directive('deleteUser', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/deleteUserModal.html'
    };
  });