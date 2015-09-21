(function(){
    'use strict';
    var mod = angular.module('app.about', ['ngRoute']);
    mod.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider){
    	$routeProvider.when('/about', {
    		template: '<page-about></page-about>'
    	});
    }
}());