'use strict';

angular.module('chattyApp')
  .factory('MessageService', function MessageService($http) {
    return {
      getMessages: function () {
        return $http({
          method: 'GET',
          url: 'http://localhost:10000'
        })
      },
      addMessage: function (msg) {
        return $http({
          method: 'POST',
          url: 'http://localhost:10000',
          data: {
            message: msg.message,
            userName: msg.userName
          }
        })
      }
    }
  });


