(function() {
	'use strict';
	var mod = angular.module('app', ['app.about', 'app.core', 'app.customer', 'app.home', 'app.login', 'app.project']);
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['app'], {
			strictDi: true
		});
	});
	mod.constant('toastr', toastr);
	mod.constant('CONFIG', {
		toasts: {
			successfullySaved: 'Successfully saved the data',
			failedToSave: 'Failed to save the data',
			successfullyRemoved: 'Successfully removed the data',
			failedToRemove: 'Failed to remove the data',
			failedToLoad: 'Failed to load the data'
		}
	});
}(toastr));