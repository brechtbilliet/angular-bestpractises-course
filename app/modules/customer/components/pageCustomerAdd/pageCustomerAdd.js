(function(){
    'use strict';
    angular.module('app.customer').directive('pageCustomerAdd', pageCustomerAddDirective);

    function pageCustomerAddDirective(){
    	PageCustomerAddController.$inject = ['CustomerPageAddModel', 'toastr', '$location', 'CONFIG'];
    	function PageCustomerAddController(CustomerPageAddModel, toastr, $location, CONFIG){
    		var vm = this;
    		vm.model = CustomerPageAddModel;
            vm.cancel = cancel;
            vm.save =save;

            vm.model.reset();

            function save(){
                function onSuccess(){
                    toastr.success(CONFIG.toasts.successfullySaved);
                    $location.path('/customers');
                }
                function onFail(){
                    toastr.error(CONFIG.toasts.failedToSave);
                }
                vm.model.save().then(onSuccess, onFail);
            }

            function cancel(){
                vm.model.cancel();
                $location.path('/customers');
            }
    	}
    	return{
    		templateUrl: 'app/modules/customer/components/pageCustomerAdd/pageCustomerAdd.html',
    		restrict: 'E',
    		controller: PageCustomerAddController,
    		controllerAs: 'pageVm'
    	};
    }
}());