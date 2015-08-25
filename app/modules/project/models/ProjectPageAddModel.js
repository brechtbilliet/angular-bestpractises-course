(function() {
	'use strict';

	angular.module('app.project').service('ProjectPageAddModel', ProjectPageAddModel);

	ProjectPageAddModel.$inject = ['projectService', 'customerService'];

	function ProjectPageAddModel(projectService, customerService) {
		var self = this;
		self.workingCopy = {
			name: '',
			description: '',
			customer: null
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
			var promise = projectService.add(self.workingCopy);
			promise.then(angular.noop, failed);
			return promise;
		}

		function reset() {
			self.validationErrors = null;
			self.workingCopy = {
				name: '',
				description: '',
				customer: null
			};
			function onSuccess(response){
				self.customers = response.data;
			}
			customerService.getAll().then(onSuccess);
		}
	}
}());