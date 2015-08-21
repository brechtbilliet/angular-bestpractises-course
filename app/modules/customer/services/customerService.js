(function(){
	'use strict';
	
	angular.module('app.customer').factory('customerService', customerService);

	customerService.$inject = ['$q', '$timeout'];
	function customerService($q, $timeout){
		return {
			getAll: getAll,
			getById: getById,
			add: add,
			update: update,
			remove: remove
		};

		function add(customer){
			var deferred = $q.defer();
			$timeout(function(){
				deferred.resolve();
			},1000);
			return deferred.promise;
		}
		function update(customer, id){
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
				deferred.resolve({data: getDummyUsers()});
			},1000);
			return deferred.promise;
		}

		function getDummyUsers(){
			var returnVal = [];
			for(var i = 0; i < 10; i++){
				returnVal.push({
					name: 'name' + i,
					city: 'city' + i,
					zipCode: 'zipCode' + i,
					street: 'street' + i,
					number: 'number' + i,
					id: i
				});
			}
			return returnVal;
		}

		function getById(){
			var deferred = $q.defer();
			$timeout(function(){
				deferred.resolve({data: getDummyUsers()[0]});
			},1000);
			return deferred.promise;
		}
	}
}());