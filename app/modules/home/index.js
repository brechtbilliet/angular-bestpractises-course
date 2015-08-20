(function(){
    'use strict';
    var mod = angular.module('app.home', ['ngRoute']);
    mod.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider){
    	$routeProvider.when('/', {
    		template: '<page-home></page-home>'
    	});
    }
}());