(function(){
    'use strict';
    angular.module('app.customer').directive('pageCustomerAdd', pageCustomerAddDirective);

    function pageCustomerAddDirective(){
    	PageCustomerAddController.$inject = ['CustomerPageAddModel', 'toastr'];
    	function PageCustomerAddController(CustomerPageAddModel, toastr){
    		var vm = this;
    		vm.model = CustomerPageAddModel;
    	}
    	return{
    		templateUrl: 'app/modules/customer/components/pageCustomerAdd/pageCustomerAdd.html',
    		restrict: 'E',
    		controller: PageCustomerAddController,
    		controllerAs: 'pageVm'
    	};
    }
}());