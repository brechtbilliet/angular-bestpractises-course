(function(){
	'use strict';
	
	angular.module('app.customer').factory('customerService', customerService);

	customerService.$inject = ['$q', '$timeout'];
	function customerService($q, $timeout){
		return {
			getAll: getAll,
			getById: getById
		};

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
					companyName: 'dummy companyName ' + i,
					description: 'dummy description',
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