(function(){
	'use strict';

	angular.module('app.project').factory('projectService', projectService);

	projectService.$inject = ['$http', 'CONFIG', 'busyService'];
	function projectService($http, CONFIG, busyService){
		return {
			getAll: getAll,
			getById: getById,
			add: add,
			update: update,
			remove: remove
		};

		function add(project){
			return busyService.handlePromise($http({
				method: 'POST',
				url: CONFIG.restUrl + 'projects',
				data: project
			}));
		}
		function update(project, id){
			return busyService.handlePromise($http({
				method: 'PUT',
				url: CONFIG.restUrl + 'projects/' + id,
				data: project
			}));
		}

		function remove(id){
			return busyService.handlePromise($http({
				method: 'DELETE',
				url: CONFIG.restUrl + 'projects/' + id
			}));
		}

		function getAll(){
			return busyService.handlePromise($http({
				method: 'GET',
				url: CONFIG.restUrl + 'projects'
			}));
		}

		function getById(id){
			return busyService.handlePromise($http({
				method: 'GET',
				url: CONFIG.restUrl + 'projects/' + id
			}));
		}
	}
}());