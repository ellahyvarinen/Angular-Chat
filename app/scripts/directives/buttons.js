'use strict';

angular
  .module('chatApp')
  .directive('buttons', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/buttons.html'
    };
  });