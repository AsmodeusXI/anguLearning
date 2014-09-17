'use strict';

/**
 * @ngdoc function
 * @name anguLearningApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anguLearningApp
 */
angular.module('anguLearningApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
