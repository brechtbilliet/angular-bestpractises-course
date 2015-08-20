(function(){
    'use strict';
    angular.module('app.project').directive('pageProject', pageDirective);

    function pageDirective(){
    	return{
    		templateUrl: 'app/modules/project/components/pageProject/pageProject.html',
    		restrict: 'E',
    	};
    }
}());