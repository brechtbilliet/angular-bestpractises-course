(function(){
    'use strict';
    angular.module('app.customer').directive('pageCustomer', pageDirective);

    function pageDirective(){
    	PageCustomerController.$inject = ['CustomerPageModel', 'toastr', 'CONFIG'];
    	function PageCustomerController(CustomerPageModel, toastr, CONFIG){
    		var vm = this;
            vm.remove = remove;
    		vm.model = CustomerPageModel;
    		vm.model.loadData().then(angular.noop, handleError);

            function remove(item){
                function onSuccess(){
                    toastr.success(CONFIG.toasts.successfullyRemoved);
                }
                function onFail(){
                    toastr.error(CONFIG.toasts.failedToRemove);
                }
                vm.model.remove(item).then(onSuccess, onFail);
            }

    		function handleError(){
    			toastr.error(CONFIG.toasts.failedToLoad);
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