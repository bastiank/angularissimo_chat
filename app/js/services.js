'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).factory('faye', function(){
  return new Faye.Client('http://localhost:8001/');
})
