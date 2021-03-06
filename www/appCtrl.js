(function() {
  'use strict';

  module.exports = appCtrl;

  appCtrl.$inject = ['firebaseFactory'];

  function appCtrl(firebaseFactory) {
    var vm = this;

    vm.tabs = firebaseFactory.getAll('tabs');
    vm.selectedIndex = 0;
  }
})();
