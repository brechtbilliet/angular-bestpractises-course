(function(){
    'use strict';
    angular.module('app.home').directive('pageHome', pageDirective);

    function pageDirective(){
    	return{
    		templateUrl: 'app/modules/home/components/pageHome/pageHome.html',
    		restrict: 'E',
    	};
    }
}());