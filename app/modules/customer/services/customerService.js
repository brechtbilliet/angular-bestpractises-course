(function(){
	'use strict';

	angular.module('app.customer').factory('customerService', customerService);

	customerService.$inject = ['$http', 'CONFIG', 'busyService'];
	function customerService($http, CONFIG, busyService){
		return {
			getAll: getAll,
			getById: getById,
			add: add,
			update: update,
			remove: remove
		};

		function add(customer){
			return busyService.handlePromise($http({
				method: 'POST',
				url: CONFIG.restUrl + 'customers',
				data: customer
			}));
		}
		function update(customer, id){
			return busyService.handlePromise($http({
				method: 'PUT',
				url: CONFIG.restUrl + 'customers/' + id,
				data: customer
			}));
		}

		function remove(id){
			return busyService.handlePromise($http({
				method: 'DELETE',
				url: CONFIG.restUrl + 'customers/' + id
			}));
		}

		function getAll(){
			return busyService.handlePromise($http({
				method: 'GET',
				url: CONFIG.restUrl + 'customers'
			}));
		}

		function getById(id){
			return busyService.handlePromise($http({
				method: 'GET',
				url: CONFIG.restUrl + 'customers/' + id
			}));
		}
	}
}());