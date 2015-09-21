 (function(){
     'use strict';
     angular.module('app.core').directive('spinner', spinnerDirective);

     function spinnerDirective(){
     	return{
     		restrict: 'E',
     		templateUrl: 'app/modules/core/components/spinner/spinner.html',
     		controller: angular.noop,
     		controllerAs: 'spinVm',
     		bindToController: true,
     		scope: {
     			spin: '='
     		}
     	}
     }
 }());