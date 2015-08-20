(function(){
    'use strict';
    angular.module('app.customer').directive('pageCustomer', pageDirective);

    function pageDirective(){
    	return{
    		templateUrl: 'app/modules/customer/components/pageCustomer/pageCustomer.html',
    		restrict: 'E',
    	};
    }
}());