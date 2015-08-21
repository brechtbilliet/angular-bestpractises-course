(function() {
	'use strict';

	angular.module('app.core').factory('locationBlockService', locationBlockService);

	locationBlockService.$inject = ['$rootScope', 'toastr', 'CONFIG'];

	function locationBlockService($rootScope, toastr, CONFIG) {
		var canLeave = true;
		
		$rootScope.$on('$locationChangeStart', function(e) {
			if (!canLeave) {
				e.preventDefault();
				toastr.warning(CONFIG.toasts.cannotLeavePage);
			}
		});

		function allow() {
			canLeave = true;
		}

		function prevent() {
			canLeave = false;
		}
		return {
			allow: allow,
			prevent: prevent
		};
	}
}());