(function() {
	'use strict';

	angular.module('app.project').service('ProjectPageDetailModel', ProjectPageDetailModel);

	ProjectPageDetailModel.$inject = ['projectService', 'customerService'];
	function ProjectPageDetailModel(projectService, customerService) {
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
			return projectService.update(self.workingCopy, self.workingCopy.id);
		}

		function workingCopyChanged(){
			self.dirty = !angular.equals(self.workingCopy, self.originalCopy);
		}
		function reset(){
			self.workingCopy = null;
			self.originalCopy = null;
			self.dirty = false;
			function onSuccess(response){
				self.customers = response.data;
			}
			customerService.getAll().then(onSuccess);
		}
		function loadData(id){
			reset();
			function onSuccess(response){
				self.originalCopy = response.data;
				self.workingCopy = angular.copy(self.originalCopy);
			}
			return projectService.getById(id).then(onSuccess);
		}
		
	}
}());