(function(){
    'use strict';
    angular.module('app.customer').directive('pageCustomerDetail', pageCustomerDetailDirective);

    function pageCustomerDetailDirective(){
    	PageCustomerDetailController.$inject = ['CustomerPageDetailModel', 'toastr', '$routeParams'];
    	function PageCustomerDetailController(CustomerPageDetailModel, toastr, $routeParams){
    		var vm = this;
    		vm.model = CustomerPageDetailModel;
            vm.model.loadData($routeParams.id).then(angular.noop, handleError);

            function handleError(){
                toastr.error('Failed to load data');
            }
    	}
    	return{
    		templateUrl: 'app/modules/customer/components/pageCustomerDetail/pageCustomerDetail.html',
    		restrict: 'E',
    		controller: PageCustomerDetailController,
    		controllerAs: 'pageVm'
    	};
    }
}());