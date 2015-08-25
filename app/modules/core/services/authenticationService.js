(function() {
	'use strict';

	angular.module('app.core').factory('authenticationService', authenticationService);

	authenticationService.$inject = ['$location', '$rootScope', '$http', 'CONFIG', '$window', 'busyService'];

	function authenticationService($location, $rootScope, $http, CONFIG, $window, busyService) {
		var session = {
			isAuthenticated: false,
			token: null,
			firstName: null,
			lastName: null
		};
		$rootScope.$on('$locationChangeStart', onLocationChangeStart);

		function onLocationChangeStart() {
			if (!session.isAuthenticated && $location.path() != '/login' && $location.path() != '/register') {
				$location.path('/login');
			}
		}

		function init() {
			if ($window.localStorage.authenticationData) {
				var authenticationData = JSON.parse($window.localStorage.authenticationData);
				session.isAuthenticated = authenticationData.isAuthenticated;
				session.token = authenticationData.token;
				session.firstName = authenticationData.firstName;
				session.lastName = authenticationData.lastName;
			}
		}

		function register(data) {
			return busyService.handlePromise($http({
				method: 'POST',
				url: CONFIG.restUrl + 'authentication/register',
				data: data
			}));
		}

		function login(data) {
			return busyService.handlePromise($http({
				method: 'POST',
				url: CONFIG.restUrl + 'authentication/login',
				data: data
			}));
		}

		function setSession(data) {
			session.isAuthenticated = true;
			session.token = data.token;
			session.firstName = data.firstName;
			session.lastName = data.lastName;
			$window.localStorage.authenticationData = JSON.stringify(session);
		}

		function logout() {
			session.isAuthenticated = false;
			session.token = null;
			session.firstName = null;
			session.lastName = null;
			delete $window.localStorage.authenticationData;
			$location.path('/login');
		}

		return {
			init: init,
			session: session,
			login: login,
			register: register,
			setSession: setSession,
			logout: logout
		};
	}
}());