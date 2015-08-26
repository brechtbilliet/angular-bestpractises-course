(function() {
	'use strict';
	var mod = angular.module('app', ['app.about', 'app.core', 'app.customer', 'app.home', 'app.login', 'app.project']);

	mod.constant('toastr', toastr);
	mod.constant('$', $);
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


	requestInterceptor.$inject = ['$window'];
	bootstrap.$inject = ['authenticationService'];
	// exceptionConfig.$inject = ['$provide'];
	httpConfig.$inject = ['$httpProvider'];

	mod.config(httpConfig);
	// mod.config(exceptionConfig);
	mod.run(bootstrap);

	function bootstrap(authenticationService) {
		authenticationService.init();
	}

	function httpConfig($httpProvider) {
		$httpProvider.interceptors.push(requestInterceptor);
	}

	function requestInterceptor($window) {
		return {
			request: function(config) {
				if ($window.localStorage.authenticationData) {
					config.headers.Authorization = 'Bearer ' + JSON.parse($window.localStorage.authenticationData).token;
				}
				return config;
			}
		};
	}

	// function exceptionConfig($provide) {
	// 	$provide.decorator("$exceptionHandler", ['$delegate', '$injector', function($delegate, $injector) {
	// 		return function(exception, cause) {
	// 			console.log(exception);
	// 			$delegate(exception, cause);
	// 		};
	// 	}]);
	// }

	angular.element(document).ready(function() {
		angular.bootstrap(document, ['app'], {
			strictDi: true
		});
	});
}(toastr));