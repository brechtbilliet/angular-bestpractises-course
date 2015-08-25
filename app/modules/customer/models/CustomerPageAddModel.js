(function() {
	'use strict';

	angular.module('app.customer').service('CustomerPageAddModel', CustomerPageAddModel);

	CustomerPageAddModel.$inject = ['customerService'];

	function CustomerPageAddModel(customerService) {
		var self = this;
		self.workingCopy = {
			name: '',
			city: '',
			zipCode: '',
			street: '',
			number: ''
		};
		self.validationErrors = null;
		self.reset = reset;
		self.cancel = cancel;
		self.save = save;

		function cancel() {
			reset();
		}

		function save() {
			function failed(resp){
				if(resp.status === 400){
					self.validationErrors = resp.data.modelState;
				}
			}
			var promise = customerService.add(self.workingCopy);
			promise.then(angular.noop, failed);
			return promise;
		}

		function reset() {
			self.workingCopy = {
				name: '',
				city: '',
				zipCode: '',
				street: '',
				number: ''
			};
			self.validationErrors = null;
		}
	}
}());