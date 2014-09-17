'use strict';

/**
 * @ngdoc function
 * @name anguLearningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anguLearningApp
 */
angular.module('anguLearningApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
