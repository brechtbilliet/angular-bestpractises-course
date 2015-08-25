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
		self.validationErrors = null;

		function reset(){
			self.emailAddress = '';
			self.password = '';
			self.login = login;
			self.validationErrors = null;
		}

		function login(){
			function onSuccess(response){
				authenticationService.setSession(response.data);
			}
			function onFail(response){
				if(response.status === 400){
					self.validationErrors = response.data.modelState;
				}
			}
			var promise = authenticationService.login(
				{emailAddress: self.emailAddress, password: self.password});
			promise.then(onSuccess, onFail);
			return promise;
		}
	}
}());