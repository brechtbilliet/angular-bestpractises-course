(function() {
	'use strict';

	angular.module('app.login').service('PageLoginModel', PageLoginModel);

	PageLoginModel.$inject = ['authenticationService'];

	function PageLoginModel(authenticationService) {
		var self = this;
		self.emailAddress = '';
		self.password = '';
		self.login = login;
		self.reset = reset;

		function reset(){
			self.emailAddress = '';
			self.password = '';
			self.login = login;
		}

		function login(){
			function onSuccess(response){
				authenticationService.setSession(response.data);
			}
			return authenticationService.login({emailAddress: self.emailAddress, password: self.password}).then(onSuccess);
		}
	}
}());