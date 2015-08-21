(function() {
	'use strict';

	angular.module('app.customer').service('CustomerPageDetailModel', CustomerPageDetailModel);

	CustomerPageDetailModel.$inject = ['customerService'];
	function CustomerPageDetailModel(customerService) {
		var self = this;
		self.originalCopy = null;
		self.workingCopy = null;
		self.dirty = false;

		self.loadData = loadData;
		self.reset = reset;
		self.workingCopyChanged = workingCopyChanged;
		self.cancel = cancel;
		self.save =save;

		function cancel(){
			reset();
		}

		function save(){
			return customerService.update(self.workingCopy, self.workingCopy.id);
		}

		function workingCopyChanged(){
			self.dirty = !angular.equals(self.workingCopy, self.originalCopy);
		}
		function reset(){
			self.workingCopy = null;
			self.originalCopy = null;
			self.dirty = false;
		}
		function loadData(id){
			reset();
			function onSuccess(response){
				self.originalCopy = response.data;
				self.workingCopy = angular.copy(self.originalCopy);
			}
			return customerService.getById(id).then(onSuccess);
		}
		
	}
}());