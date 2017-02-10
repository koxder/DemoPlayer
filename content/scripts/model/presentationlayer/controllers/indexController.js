angular.module('app').
controller('indexController',
		['$scope','$rootScope',
		function($scope,$rootScope){

				$scope.controlador='indexController';
			$scope.persona={nombre:''};	
			$scope.eventos=[];

              $scope.friends = [
                {name:'John', age:25, gender:'boy'},
                {name:'Jessie', age:30, gender:'girl'},
                {name:'Johanna', age:28, gender:'girl'},
                {name:'Joy', age:15, gender:'girl'}
              ];

	}]);
