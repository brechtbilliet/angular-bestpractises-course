(function(){
    'use strict';
    angular.module('app.core').directive('page', pageDirective);

    function pageDirective(){

        PageDirectiveController.$inject = ['menuItemService', 'authenticationService', '$location', 'busyService'];
    	function PageDirectiveController(menuItemService, authenticationService, $location, busyService){
    		var vm = this;
    		vm.menuItems = menuItemService.getAll();
            vm.session = authenticationService.session;
            vm.busyModel = busyService.busyModel;
            vm.logout = authenticationService.logout;
    	}
        return{
            templateUrl: 'app/modules/core/components/page/page.html',
            restrict: 'E',
            controller: PageDirectiveController,
            controllerAs: 'pageVm'
        };
    }
}());