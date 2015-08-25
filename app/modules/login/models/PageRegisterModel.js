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
		self.validationErrors = null;


		function reset() {
			self.workingCopy.emailAddress = '';
			self.workingCopy.password = '';
			self.workingCopy.confirmPassword = '';
			self.workingCopy.firstName = '';
			self.workingCopy.lastName = '';
			self.workingCopy.register = register;
			self.validationErrors = null;
		}

		function register() {
			function onSuccess(response) {
				authenticationService.setSession(response.data);
			}
			function onFail(response){
				if(response.status === 400){
					self.validationErrors = response.data.modelState;
				}
			}
			var promise = authenticationService.register(self.workingCopy);
			promise.then(onSuccess, onFail);
			return promise;
		}
	}
}());