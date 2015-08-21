(function(){
    'use strict';
    angular.module('app.core').directive('page', pageDirective);

    function pageDirective(){
    	
        PageDirectiveController.$inject = ['menuItemService'];
    	function PageDirectiveController(menuItemService){
    		var vm = this;
    		vm.menuItems = menuItemService.getAll();
    	}
        return{
            templateUrl: 'app/modules/core/components/page/page.html',
            restrict: 'E',
            controller: PageDirectiveController,
            controllerAs: 'pageVm'
        };
    }
}());