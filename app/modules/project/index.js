(function(){
    'use strict';
    var mod = angular.module('app.project', ['ngRoute']);
    mod.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider){
    	$routeProvider
    		.when('/projects', {
	    		template: '<page-project></page-project>'
	    	})
	    	.when('/projects/add', {
	    		template: '<page-project-add></page-project-add>'
	    	})
	    	.when('/projects/:id', {
	    		template: '<page-project-detail></page-project-detail>'
	    	});
    }
}());