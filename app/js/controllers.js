'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ChatCtrl', function($scope, faye) {
    $scope.messages = [];
    initServerConnection();

    function initServerConnection(){
        faye.subscribe('/messages', function(message) {
          $scope.$apply(function(){ 
            $scope.messages.unshift(message)
          });
        });
    }

    $scope.sendMessage = function() {
      var message =  {date: new Date(), name: $scope.nameInput,text: $scope.messageInput};
      faye.publish('/messages',message);
      $scope.messageInput = '';
    };
  });
