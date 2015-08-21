(function(){
    'use strict';
    angular.module('app.project').directive('pageProjectDetail', pageProjectDetailDirective);

    function pageProjectDetailDirective(){
    	PageProjectDetailController.$inject = ['ProjectPageDetailModel', 'toastr', '$routeParams', '$location', 'CONFIG'];
    	function PageProjectDetailController(ProjectPageDetailModel, toastr, $routeParams, $location, CONFIG){
    		var vm = this;
            vm.workingCopyChanged = workingCopyChanged;
            vm.cancel = cancel;
            vm.save =save;

    		vm.model = ProjectPageDetailModel;
            vm.model.loadData($routeParams.id).then(angular.noop, failedToLoad);

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

            function workingCopyChanged(){
                vm.model.workingCopyChanged();
            }

            function failedToLoad(){
                toastr.error(CONFIG.toasts.failedToLoad);
            }
    	}
    	return{
    		templateUrl: 'app/modules/project/components/pageProjectDetail/pageProjectDetail.html',
    		restrict: 'E',
    		controller: PageProjectDetailController,
    		controllerAs: 'pageVm'
    	};
    }
}());