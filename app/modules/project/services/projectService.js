(function(){
	'use strict';
	
	angular.module('app.project').factory('projectService', projectService);

	projectService.$inject = ['$http', 'CONFIG'];
	function projectService($http, CONFIG){
		return {
			getAll: getAll,
			getById: getById,
			add: add,
			update: update,
			remove: remove
		};

		function add(project){
			return $http({
				method: 'POST',
				url: CONFIG.restUrl + 'projects',
				data: project
			});
		}
		function update(project, id){
			return $http({
				method: 'PUT',
				url: CONFIG.restUrl + 'projects/' + id,
				data: project
			});
		}

		function remove(id){
			return $http({
				method: 'DELETE',
				url: CONFIG.restUrl + 'projects/' + id
			});
		}

		function getAll(){
			return $http({
				method: 'GET',
				url: CONFIG.restUrl + 'projects'
			});
		}

		function getById(id){
			return $http({
				method: 'GET',
				url: CONFIG.restUrl + 'projects/' + id
			});
		}
	}
}());