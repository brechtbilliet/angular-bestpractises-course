(function(){
	'use strict';
	
	angular.module('app.customer').factory('customerService', customerService);

	customerService.$inject = ['$http', 'CONFIG'];
	function customerService($http, CONFIG){
		return {
			getAll: getAll,
			getById: getById,
			add: add,
			update: update,
			remove: remove
		};

		function add(customer){
			return $http({
				method: 'POST',
				url: CONFIG.restUrl + 'customers',
				data: customer
			});
		}
		function update(customer, id){
			return $http({
				method: 'PUT',
				url: CONFIG.restUrl + 'customers/' + id,
				data: customer
			});
		}

		function remove(id){
			return $http({
				method: 'DELETE',
				url: CONFIG.restUrl + 'customers/' + id
			});
		}

		function getAll(){
			return $http({
				method: 'GET',
				url: CONFIG.restUrl + 'customers'
			});
		}

		function getById(id){
			return $http({
				method: 'GET',
				url: CONFIG.restUrl + 'customers/' + id
			});
		}
	}
}());