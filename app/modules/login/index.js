(function() {
		'use strict';
		var mod = angular.module('app.login', ['ngRoute']);
		mod.config(routeConfig);

		routeConfig.$inject = ['$routeProvider'];

		function routeConfig($routeProvider) {
			$routeProvider
				.when('/login', {
					template: '<page-login></page-login>'
				})
				.when('/register', {
					template: '<page-register></page-register>'
				});
			}
		}());