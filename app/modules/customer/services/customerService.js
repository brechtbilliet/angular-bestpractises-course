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
		}
		function update(customer, id){
		}

		function remove(id){
		}

		function getAll(){
			return $http({
				method: 'GET',
				url: CONFIG.restUrl + 'customers'
			});
		}

		function getDummyUsers(){
		}

		function getById(){
		}
	}
}());