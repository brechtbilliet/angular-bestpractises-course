(function(){
    'use strict';
    angular.module('app.about').directive('pageAbout', pageDirective);

    function pageDirective(){
    	return{
    		templateUrl: 'app/modules/about/components/pageAbout/pageAbout.html',
    		restrict: 'E',
    	};
    }
}());