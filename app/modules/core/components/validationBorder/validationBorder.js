 (function(){
     'use strict';
     angular.module('app.core').directive('validationBorder', validationBorderDirective);

     function validationBorderDirective(){
     	return{
     		restrict: 'A',
     		link: link,
     		scope: {
     			validationBorder: '='
     		}
     	}
          function link(scope, element, attr){
               scope.$watch('validationBorder', validationErrorsChanged, true);

               function validationErrorsChanged(){
                    element.removeClass('invalid');
                    for(var key in scope.validationBorder){
                         if(key.toLowerCase() === attr.name.toLowerCase()){
                              element.addClass('invalid');
                         }
                    }
                    console.log('validationErrorsChanged');
               }
          }
     }
 }());