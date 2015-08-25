(function() {
	'use strict';

	angular.module('app.customer').service('CustomerPageDetailModel', CustomerPageDetailModel);

	CustomerPageDetailModel.$inject = ['customerService', 'locationBlockService'];
	function CustomerPageDetailModel(customerService, locationBlockService) {
		var self = this;
		self.originalCopy = null;
		self.workingCopy = null;
		self.dirty = false;
		self.validationErrors = null;

		self.loadData = loadData;
		self.reset = reset;
		self.workingCopyChanged = workingCopyChanged;
		self.cancel = cancel;
		self.save = save;

		function cancel(){
			reset();
			locationBlockService.allow();
		}

		function save(){
			function failed(resp){
				if(resp.status === 400){
					self.validationErrors = resp.data.modelState;
				}
			}
			var promise = customerService.update(self.workingCopy, self.workingCopy.id);
			promise.then(cancel, failed);
			return promise;
		}

		function workingCopyChanged(){
			self.dirty = !angular.equals(self.workingCopy, self.originalCopy);
			if(self.dirty){
				locationBlockService.prevent();
			}
			else{
				locationBlockService.allow();
			}
		}
		function reset(){
			self.workingCopy = null;
			self.originalCopy = null;
			self.dirty = false;
			self.validationErrors = null;
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