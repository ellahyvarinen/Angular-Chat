'use strict';

angular
  .module('chatApp')
  .factory('AjaxFactory', function($http) {
    var urlBase = 'http://users.metropolia.fi/~ilkkamtk/chatApi';
    var ajaxFunctions = {};

    ajaxFunctions.login = function(args) {
      return $http.post(urlBase + '/login', args);
    };

    ajaxFunctions.register = function(args) {
      return $http.post(urlBase + '/users', args);
    };

    ajaxFunctions.postMessage = function(args) {
      return $http.post(urlBase + '/messages', args);
    };

    ajaxFunctions.deleteMessage = function(args) {
      return $http.post(urlBase + '/messages/', args);
    };

    ajaxFunctions.modifyMessage = function(args) {
      return $http.post(urlBase + '/messages/', args);
    };

    ajaxFunctions.saveImage = function(args) {
      return $http.post(urlBase + '/images', args);
    };

    ajaxFunctions.getMessage = function(args) {
      return $http.get(urlBase + '/messages/' + args);
    };

    ajaxFunctions.getMessages = function() {
      return $http.get(urlBase + '/messages');
    };

    ajaxFunctions.reply = function(args) {
      return $http.post(urlBase + '/threads', args);
    };

    ajaxFunctions.deleteUser = function(args) {
      return $http.delete(urlBase + '/users/' + args);
    };

    ajaxFunctions.getUser = function(args) {
      return $http.get(urlBase + '/users/' + args);
    };

    ajaxFunctions.getUsers = function() {
      return $http.get(urlBase + '/users');
    };

    return ajaxFunctions;
  });
