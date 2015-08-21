(function() {
	'use strict';

	angular.module('app.customer').service('CustomerPageModel', CustomerPageModel);

	CustomerPageModel.$inject = ['customerService'];
	function CustomerPageModel(customerService) {
		var self = this;
		self.gridData = null;
		self.loadData = loadData;

		function loadData(){
			function onSuccess(response){
				self.gridData = response.data;
			}
			return customerService.getAll().then(onSuccess);
		}
	}
}());