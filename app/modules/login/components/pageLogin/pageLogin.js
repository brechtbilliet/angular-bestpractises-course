(function() {
	'use strict';
	angular.module('app.login').directive('pageLogin', pageDirective);

	function pageDirective() {
		PageLoginController.$inject = ['PageLoginModel','$location', 'toastr', 'CONFIG'];
		function PageLoginController(PageLoginModel, $location, toastr, CONFIG) {
			var vm = this;
			vm.model = PageLoginModel;
			vm.login = login;
			vm.model.reset();

			function login(){
				function onSuccess(){
					$location.path('/');
				}
				function onFail(){
					toastr.error(CONFIG.toasts.failedToLogin);
				}
				vm.model.login().then(onSuccess, onFail);
			}
		}

		return {
			templateUrl: 'app/modules/login/components/pageLogin/pageLogin.html',
			restrict: 'E',
			controller: PageLoginController,
			controllerAs: 'pageVm'
		};
	}
}());