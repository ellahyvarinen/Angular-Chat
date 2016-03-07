'use strict';

angular
  .module('chatApp')
  .directive('login', function() {
    return {
      restrict: 'E', // Korvaa login elementin index.html-sivulla
			// E Element names
			// A Attributes
			// C Classes
      templateUrl: 'views/login.html'
    };
  });
