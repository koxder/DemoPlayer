angular.module('app').
controller('indexController',
		['$scope','$rootScope',
		function($scope,$rootScope){

			$scope.controlador='indexController';
			$scope.persona={nombre:''};	
			$scope.eventos=[];


	}]);
