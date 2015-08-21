(function(){
    'use strict';
    angular.module('app.customer').directive('pageCustomer', pageDirective);

    function pageDirective(){
    	PageCustomerController.$inject = ['CustomerPageModel', 'toastr'];
    	function PageCustomerController(CustomerPageModel, toastr){
    		var vm = this;
    		vm.model = CustomerPageModel;
    		vm.model.loadData().then(angular.noop, handleError);

    		function handleError(){
    			toastr.error('Failed to load data');
    		}
    	}
    	return{
    		templateUrl: 'app/modules/customer/components/pageCustomer/pageCustomer.html',
    		restrict: 'E',
    		controller: PageCustomerController,
    		controllerAs: 'pageVm'
    	};
    }
}());