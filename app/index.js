(function() {
	'use strict';
	angular.module('app', []).run(function() {
		console.log('bootstrapped');
	});
	angular.bootstrap(document, ['app', 'app.about', 'app.core',
		'app.customer', 'app.home',
		'app.login', 'app.project'
	], {
		strictDi: true
	});
}());