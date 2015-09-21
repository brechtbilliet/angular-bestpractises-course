(function() {
	'use strict';

	angular.module('app.project').service('ProjectPageModel', ProjectPageModel);

	ProjectPageModel.$inject = ['projectService'];
	function ProjectPageModel(projectService) {
		var self = this;
		self.gridData = null;
		self.loadData = loadData;
		self.remove = remove;

		function remove(item){
			return projectService.remove(item.id).then(self.loadData);
		}

		function loadData(){
			function onSuccess(response){
				self.gridData = response.data;
			}
			return projectService.getAll().then(onSuccess);
		}
	}
}());