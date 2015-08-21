(function(){
	'use strict';
	
	angular.module('app.core').factory('menuItemService', menuItemService);

	function menuItemService(){
		return{
			getAll: getAll
		};

		function getAll(){
			return [
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