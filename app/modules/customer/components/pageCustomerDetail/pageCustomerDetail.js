(function(){
    'use strict';
    angular.module('app.customer').directive('pageCustomerDetail', pageCustomerDetailDirective);

    function pageCustomerDetailDirective(){
    	PageCustomerDetailController.$inject = ['CustomerPageDetailModel', 'toastr', '$routeParams', '$location', 'CONFIG'];
    	function PageCustomerDetailController(CustomerPageDetailModel, toastr, $routeParams, $location, CONFIG){
    		var vm = this;
            vm.workingCopyChanged = workingCopyChanged;
            vm.cancel = cancel;
            vm.save =save;

    		vm.model = CustomerPageDetailModel;
            vm.model.loadData($routeParams.id).then(angular.noop, failedToLoad);

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

            function workingCopyChanged(){
                vm.model.workingCopyChanged();
            }

            function failedToLoad(){
                toastr.error(CONFIG.toasts.failedToLoad);
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