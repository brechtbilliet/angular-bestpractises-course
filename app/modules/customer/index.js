(function(){
    'use strict';
    var mod = angular.module('app.customer', ['ngRoute']);
    mod.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider){
    	$routeProvider.when('/customers', {
    		template: '<page-customers></page-customers>'
    	});
    }
}());