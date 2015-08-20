(function(){
    'use strict';
    var mod = angular.module('app.project', ['ngRoute']);
    mod.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider){
    	$routeProvider.when('/projects', {
    		template: '<page-project></page-project>'
    	});
    }
}());