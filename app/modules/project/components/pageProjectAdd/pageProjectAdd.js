(function(){
    'use strict';
    angular.module('app.project').directive('pageProjectAdd', pageProjectAddDirective);

    function pageProjectAddDirective(){
    	PageProjectAddController.$inject = ['ProjectPageAddModel', 'toastr', '$location', 'CONFIG'];
    	function PageProjectAddController(ProjectPageAddModel, toastr, $location, CONFIG){
    		var vm = this;
    		vm.model = ProjectPageAddModel;
            vm.cancel = cancel;
            vm.save =save;

            vm.model.reset();

            function save(){
                function onSuccess(){
                    toastr.success(CONFIG.toasts.successfullySaved);
                    $location.path('/projects');
                }
                function onFail(){
                    toastr.error(CONFIG.toasts.failedToSave);
                }
                vm.model.save().then(onSuccess, onFail);
            }

            function cancel(){
                vm.model.cancel();
                $location.path('/projects');
            }
    	}
    	return{
    		templateUrl: 'app/modules/project/components/pageProjectAdd/pageProjectAdd.html',
    		restrict: 'E',
    		controller: PageProjectAddController,
    		controllerAs: 'pageVm'
    	};
    }
}());