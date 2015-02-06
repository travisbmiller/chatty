'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    
    $scope.messages = [];
   
    
    var getMessages = function(){
      MessageService.getMessages().then(function(res) {
        console.log(res.data);
        $scope.messages = res.data
      })
    }
    getMessages();

    $scope.addMessage = function () {
      console.log($scope.newMessage);
      MessageService.addMessage($scope.newMessage)
      .then(function (res) {
        console.log(res)
        getMessages();
        $scope.newMessage = '';
      })
      .then(function (res){
        console.log(res)
      })
      

    }

  });
