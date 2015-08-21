(function() {
	'use strict';
	angular.module('app.login').directive('pageRegister', pageDirective);

	function pageDirective() {
		PageRegisterController.$inject = ['PageRegisterModel','$location', 'toastr', 'CONFIG'];
		function PageRegisterController(PageRegisterModel, $location, toastr, CONFIG) {
			var vm = this;
			vm.model = PageRegisterModel;
			vm.register = register;
			vm.model.reset();

			function register(){
				function onSuccess(){
					$location.path('/');
				}
				function onFail(){
					toastr.error(CONFIG.toasts.failedToRegister);
				}
				vm.model.register().then(onSuccess, onFail);
			}
		}

		return {
			templateUrl: 'app/modules/login/components/pageRegister/pageRegister.html',
			restrict: 'E',
			controller: PageRegisterController,
			controllerAs: 'pageVm'
		};
	}
}());