(function() {
	'use strict';

	angular.module('app.customer').service('CustomerPageDetailModel', CustomerPageDetailModel);

	CustomerPageDetailModel.$inject = ['customerService'];
	function CustomerPageDetailModel(customerService) {
		var self = this;
		self.loadData = loadData;
		self.originalCopy = null;
		self.workingCopy = null;

		function loadData(id){
			function onSuccess(response){
				self.originalCopy = response.data;
				self.workingCopy = angular.copy(self.originalCopy);
			}
			return customerService.getById(id).then(onSuccess);
		}
		
	}
}());