'use strict';

angular
  .module('chatApp')
  .directive('register', function() {
    return {
      restrict: 'E',
			// E Element names
			// A Attributes
			// C Classes
      templateUrl: 'views/register.html'
    };
  });