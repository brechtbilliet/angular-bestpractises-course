(function(){
    'use strict';
    angular.module('app.core').directive('page', pageDirective);

    function pageDirective(){
    	return{
    		templateUrl: 'app/modules/core/components/page/page.html',
    		restrict: 'E',
    		controller: PageDirectiveController,
    		controllerAs: 'pageVm'
    	};
    	function PageDirectiveController(){
    		var vm = this;
    		vm.menuItems = [
    			{
    				label: 'home',
    				url: '/'
    			},
    			{
    				label: 'customers',
    				url: '/customers'
    			},
    			{
    				label: 'projects',
    				url: '/projects'
    			},
    			{
    				label: 'about',
    				url: '/about'
    			},
    		];
    	}
    }
}());