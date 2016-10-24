'use strict';

angular.module('myApp.contacts', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'contacts/contacts.html',
      controller: 'ContactsCtrl'
    });
  }])

  .controller('ContactsCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.defaults.useXDomain = true
    delete $http.defaults.headers.common['X-Requested-With'];

    $scope.showExpandedView = false;
    $scope.showAlert = false;

    $http.get('http://www.mocky.io/v2/580e37bc120000ae1007880c').
      success(function (data, status, headers, config) {
        $scope.contacts = data;
      }).
      error(function (data, status, headers, config) {
        $scope.showAlert = true;
      });

    $scope.addContact = function () {
      if (!$scope.inputName || !$scope.inputEmail)
        return

      let newContact = {
        "name": $scope.inputName,
        "email": $scope.inputEmail,
        "job": $scope.inputJob,
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
      }
      $scope.contacts.push(newContact)
    }

    $scope.expand = function (contact) {
      if (!contact)
        return;
      $scope.showExpandedView = true;
      $scope.selectedContact = contact;
    }
  }]);