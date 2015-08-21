(function() {
	'use strict';

	angular.module('app.customer').service('CustomerPageAddModel', CustomerPageAddModel);

	CustomerPageAddModel.$inject = ['customerService'];

	function CustomerPageAddModel(customerService) {
		var self = this;
		self.workingCopy = {
			companyName: '',
			description: ''
		};
		self.reset = reset;
		self.cancel = cancel;
		self.save = save;

		function cancel() {
			reset();
		}

		function save() {
			return customerService.add(self.workingCopyChanged);
		}

		function reset() {
			self.workingCopy = {
				companyName: '',
				description: ''
			};
		}
	}
}());