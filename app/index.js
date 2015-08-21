(function() {
	'use strict';
	angular.module('app', ['app.about', 'app.core', 'app.customer', 'app.home', 'app.login', 'app.project']);
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['app'], {
			strictDi: true
		});
	});
}());