'use strict';

describe('myApp.contacts module', function () {

  beforeEach(module('myApp.contacts'));
  var $controller;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.expand', function() {
    it('sets the alert flag when contact details are passed', function() {
      var $scope = {};
      var controller = $controller('ContactsCtrl', { $scope: $scope });
      $scope.expand({'name':'test'});
      expect($scope.showExpandedView).toBe(true);
      expect($scope.selectedContact.name).toEqual('test');
    });

    it('does not set the alert flag when no contact details are passed', function() {
      var $scope = {};
      var controller = $controller('ContactsCtrl', { $scope: $scope });
      $scope.expand();
      expect($scope.showExpandedView).toBe(false);
      expect($scope.selectedContact).toBeUndefined();
    });
  });

  describe('$scope.addContacts', function() {
    it('appends when contact details are passed', function() {
      var $scope = {};
      var controller = $controller('ContactsCtrl', { $scope: $scope });
      $scope.contacts=[];
      $scope.inputName='test';
      $scope.inputEmail='testEmail';
      $scope.addContact();
      expect($scope.contacts.length).toBe(1);
    });

    it('does not add empty contact details', function() {
      var $scope = {};
      var controller = $controller('ContactsCtrl', { $scope: $scope });
      $scope.contacts=[];
      $scope.addContact();
      expect($scope.showExpandedView).toBe(false);
      expect($scope.contacts.length).toBe(0);
    });
  });
});