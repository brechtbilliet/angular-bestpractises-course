(function() {
	'use strict';

	angular.module('app.login').service('PageRegisterModel', PageRegisterModel);

	PageRegisterModel.$inject = ['authenticationService'];

	function PageRegisterModel(authenticationService) {
		var self = this;
		self.reset = reset;
		self.register = register;
		self.workingCopy = {
			emailAddress: '',
			password: '',
			confirmPassword: '',
			firstName: '',
			lastName: ''
		};


		function reset() {
			self.workingCopy.emailAddress = '';
			self.workingCopy.password = '';
			self.workingCopy.confirmPassword = '';
			self.workingCopy.firstName = '';
			self.workingCopy.lastName = '';
			self.workingCopy.register = register;
		}

		function register() {
			function onSuccess(response) {
				authenticationService.setSession(response.data);
			}
			return authenticationService.register(self.workingCopy).then(onSuccess);
		}
	}
}());