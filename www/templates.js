angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("chat.html","<h3>Chat</h3>\n<md-content>\n  <md-list>\n    <md-list-item class=\"md-2-line\" ng-repeat=\'post in vmc.chat\'>\n      <img ng-src=\'http://toronto.bluejays.mlb.com/tor/images/y2003_history/im_logo_1_110_94.gif\' class=\"md-avatar\" alt=\"Icon\" />\n      <div class=\"md-list-item-text\">\n        <h3>{{post.data.name}}:</h3>\n        <p>{{post.data.message}}</p>\n      </div>\n    </md-list-item>\n  </md-list>\n</md-content>\n\n\n<form ng-submit=\'vmc.postChat(newMessage)\'>\n  <div>\n    <md-input-container>\n      <label>Name</label>\n      <md-select ng-model=\'newMessage.name\'>\n        <md-option ng-repeat=\'user in vmc.savedUsers\' value={{user.data.name}}>\n          {{user.data.name}}\n        </md-option>\n      </md-select>\n    </md-input-container>\n  </div>\n  <div>\n    <md-input-container>\n      <label>Message</label>\n      <input ng-model=\'newMessage.message\'>\n    </md-input-container>\n  </div>\n  <md-button class=\"md-raised md-primary\" ng-disabled=\'!newMessage.name || !newMessage.message\' type=\'submit\'>Submit</md-button>\n</form>\n");
$templateCache.put("index.html","<!DOCTYPE html>\n<html ng-app=\'app\'>\n  <head>\n    <title>Workshop 2 - Master Branch</title>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\"></link>\n    <link rel=\'stylesheet\' href=\'/bower_components/angular-material/angular-material.min.css\'></link>\n    <script src=\'/bower_components/angular/angular.min.js\'></script>\n    <script src=\'/bower_components/angular-ui-router/release/angular-ui-router.min.js\'></script>\n    <script src=\'/bower_components/angular-animate/angular-animate.min.js\'></script>\n    <script src=\'/bower_components/angular-messages/angular-messages.min.js\'></script>\n    <script src=\'/bower_components/angular-aria/angular-aria.min.js\'></script>\n    <script src=\'/bower_components/angular-material/angular-material.min.js\'></script>\n    <script src=\'/bower_components/firebase/firebase.js\'></script>\n    <script src=\'/bower_components/angularfire/dist/angularfire.min.js\'></script>\n    <script src=\'dist.js\'></script>\n  </head>\n\n  <body ng-controller=\'appCtrl as vm\'>\n    <md-content>\n      <md-tabs md-selected=\'vm.selectedIndex\'md-stretch-tabs=\'always\' md-dynamic-height>\n        <md-tab ng-repeat=\'tab in vm.tabs\' ui-sref=\'{{tab.data.state}}\' label=\'{{tab.data.title}}\'>\n          <md-tab-body>\n            <div ui-view=\'view\'></div>\n          </md-tab-body>\n        </md-tab>\n      </md-tabs>\n    </md-content>\n  </body>\n</html>\n");
$templateCache.put("user.html","<h3>Create new user:</h3>\n<form>\n  <md-content>\n    <div>\n      <md-input-container>\n        <label>Name</label>\n        <input ng-model=\'newUser.name\'>\n      </md-input-container>\n    </div>\n    <div>\n      <md-input-container>\n        <label>Email</label>\n        <input type=\'email\' ng-model=\'newUser.email\'>\n      </md-input-container>\n    </div>\n    <div>\n      <md-button type=\'submit\' ng-click=\'vmc.addNewUser(newUser)\' class=\"md-raised\" ng-disabled=\'!newUser.name || !newUser.email\'>Submit</md-button>\n    </div>\n  </md-content>\n</form>\n");
$templateCache.put("userList.html","<h3>User List</h3>\n\n<md-content>\n  <md-input-container>\n    <label>Search</label>\n    <input ng-model=\'vmc.search\'>\n  </md-input-container>\n</md-content>\n\n<md-content>\n  <md-list>\n    <md-list-item ng-repeat=\'user in vmc.users | filter: vmc.search | orderBy:\"data.name\"\'>\n      <md-input-container>\n        <label>Name</label>\n        <input ng-model=\'user.data.name\' ng-change=\'vmc.updateUser(user)\'>\n      </md-input-container>\n      <md-input-container>\n        <label>Email</label>\n        <input ng-model=\'user.data.email\' ng-change=\'vmc.updateUser(user)\'>\n      </md-input-container>\n      <md-button class=\"md-raised\" ng-click=\'vmc.deleteUser(user)\'>Delete</md-button>\n    </md-list-item>\n</md-list>\n</md-content>\n");}]);