(function(){
	'use strict';
	
	angular.module('app.project').factory('projectService', projectService);

	projectService.$inject = ['$q', '$timeout'];
	function projectService($q, $timeout){
		return {
			getAll: getAll,
			getById: getById,
			add: add,
			update: update,
			remove: remove
		};

		function add(project){
			var deferred = $q.defer();
			$timeout(function(){
				deferred.resolve();
			},1000);
			return deferred.promise;
		}
		function update(project, id){
			var deferred = $q.defer();
			$timeout(function(){
				deferred.resolve();
			},1000);
			return deferred.promise;
		}

		function remove(id){
			var deferred = $q.defer();
			$timeout(function(){
				deferred.resolve();
			},1000);
			return deferred.promise;
		}

		function getAll(){
			var deferred = $q.defer();
			$timeout(function(){
				deferred.resolve({data: getDummyProjects()});
			},1000);
			return deferred.promise;
		}

		function getDummyProjects(){
			var returnVal = [];
			for(var i = 0; i < 10; i++){
				returnVal.push({
					name: 'dummy projectname ' + i,
					description: 'dummy description',
					customer: {
						id: i,
						companyName: 'Dummy companyName',
						description: 'dummy description'
					},
					id: i
				});
			}
			return returnVal;
		}

		function getById(){
			var deferred = $q.defer();
			$timeout(function(){
				deferred.resolve({data: getDummyProjects()[0]});
			},1000);
			return deferred.promise;
		}
	}
}());