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
		self.reset = reset;
		self.cancel = cancel;
		self.save = save;

		function cancel() {
			reset();
		}

		function save() {
			return projectService.add(self.workingCopyChanged);
		}

		function reset() {
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