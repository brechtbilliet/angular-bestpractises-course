 (function(){
     'use strict';
     angular.module('app.core').directive('validationSummary', validaitonSummaryDirective);

     function validaitonSummaryDirective(){
     	return{
     		restrict: 'E',
     		templateUrl: 'app/modules/core/components/validationSummary/validationSummary.html',
     		controller: angular.noop,
     		controllerAs: 'validationSummaryVm',
     		bindToController: true,
     		scope: {
     			validationErrors: '='
     		}
     	}
     }
 }());