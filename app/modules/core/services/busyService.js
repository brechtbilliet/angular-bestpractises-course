(function() {
	'use strict';

	angular.module('app.core').factory('busyService', busyService);

	busyService.$inject = [];

	function busyService() {
		var busyModel = {
			isBusy: false
		},
		activePromises = 0;

		function handlePromise(promise){
			activePromises ++;
			busyModel.isBusy = true;
			promise.then(deactivatePromise, deactivatePromise);
			return promise;
		}

		function deactivatePromise(){
			activePromises --;
			if(activePromises === 0){
				busyModel.isBusy = false;
			}
		}
		return{
			busyModel: busyModel,
			handlePromise: handlePromise
		}
	}
}());