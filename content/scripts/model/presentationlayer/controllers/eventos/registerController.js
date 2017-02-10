angular.module('app').controller('eventos_registerController',
	['$scope','$http','$interval',
	function($scope,$http,$interval){

		$scope.nuevoInscrito=function(){
			//ESTO HABRIA QUE HACERLO EN SERVICIOS
			//DEBERES
			//LO HACEMOS AQUI POR FALTA DE TIEMPO
			var nuevoInscrito = {
				Id:UtilitiesManager.GenerateGUID(),
				Email:null,
				Apellidos:null,
				Nombre:null,
				DBInsertedDate:null
			}

			$scope.$parent.registroEvento.Inscritos.push(nuevoInscrito)

		};

		$scope.guardar=function(){
			
		};

	}]);
