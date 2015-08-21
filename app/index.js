(function() {
	'use strict';
	var mod = angular.module('app', ['app.about', 'app.core', 'app.customer', 'app.home', 'app.login', 'app.project']).run(bootstrap);

	bootstrap.$inject = ['authenticationService'];
	function bootstrap(authenticationService){
		authenticationService.init();
	}
	
	mod.constant('toastr', toastr);
	mod.constant('CONFIG', {
		toasts: {
			successfullySaved: 'Successfully saved the data',
			failedToSave: 'Failed to save the data',
			successfullyRemoved: 'Successfully removed the data',
			failedToRemove: 'Failed to remove the data',
			failedToLoad: 'Failed to load the data',
			failedToLogin: 'Failed to login',
			failedToRegister: 'Failed to register',
			cannotLeavePage: 'Can not leave page, please save or cancel your changes first!'
		},
		restUrl: 'http://nflow-angular-course.azurewebsites.net/'
	});
	mod.config(httpConfig);

	httpConfig.$inject = ['$httpProvider'];
	function httpConfig($httpProvider){
		$httpProvider.interceptors.push(requestInterceptor);
	}

	requestInterceptor.$inject = ['$window'];

	function requestInterceptor($window){
		return{
			request: function(config){
				if ($window.localStorage.authenticationData) {
					config.headers.Authorization = 'Bearer ' + JSON.parse($window.localStorage.authenticationData).token;
				}
				return config;
			}
		};
	}
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['app'], {
			strictDi: true
		});
	});
}(toastr));