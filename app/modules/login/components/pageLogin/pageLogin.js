(function(){
    'use strict';
    angular.module('app.login').directive('pageLogin', pageDirective);

    function pageDirective(){
    	return{
    		templateUrl: 'app/modules/login/components/pageLogin/pageLogin.html',
    		restrict: 'E',
    	};
    }
}());