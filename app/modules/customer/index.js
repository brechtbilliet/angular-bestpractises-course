(function(){
    'use strict';
    var mod = angular.module('app.customer', ['ngRoute']);
    mod.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider){
    	$routeProvider
    		.when('/customers', {
	    		template: '<page-customer></page-customer>'
	    	})
	    	.when('/customers/add', {
	    		template: '<page-customer-add></page-customer-add>'
	    	})
	    	.when('/customers/:id', {
	    		template: '<page-customer-detail></page-customer-detail>'
	    	});
    }
}());