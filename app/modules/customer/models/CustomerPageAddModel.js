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
	}
}());