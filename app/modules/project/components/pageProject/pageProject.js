(function(){
    'use strict';
    angular.module('app.project').directive('pageProject', pageDirective);

    function pageDirective(){
    	PageProjectController.$inject = ['ProjectPageModel', 'toastr', 'CONFIG'];
    	function PageProjectController(ProjectPageModel, toastr, CONFIG){
    		var vm = this;
            vm.remove = remove;
    		vm.model = ProjectPageModel;
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
    		templateUrl: 'app/modules/project/components/pageProject/pageProject.html',
    		restrict: 'E',
    		controller: PageProjectController,
    		controllerAs: 'pageVm'
    	};
    }
}());