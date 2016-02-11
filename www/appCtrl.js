(function() {
  'use strict';

  module.exports = appCtrl;

  appCtrl.$inject = ['$firebaseArray', 'firebaseFactory'];

  function appCtrl($firebaseArray, firebaseFactory) {
    var vm = this;

    vm.users = firebaseFactory.getAll('user');
    vm.addNewUser = addNewUser;
    vm.updateUser = updateUser;
    vm.deleteUser = deleteUser;

    /*
      addNewUser
      Method that calls firebaseFactory.insertDb to push a new user to the
      Firebase instance
      After insert call, clears the name and email
      @param newUser: JSON object with the name and email
    */
    function addNewUser(newUser) {
      firebaseFactory.insertDb('user', newUser);
      newUser.name = '';
      newUser.email = '';
    }

    /*
      updateUser
      Given a user object, call the firebaseFactory service method to
      update the user at the Firebase path 'user'
      @param user: User object
    */
    function updateUser(user){
      firebaseFactory.updateDb('user', user);
    }

    /*
      deleteUser
      Given a user object, call the firebaseFactory service method to
      delete that user at the Firebase path 'user'
      @param user: User object
    */
    function deleteUser(user) {
      firebaseFactory.deleteDb('user', user);
    }
  }
})();
