angular.module('app').controller('home_indexController',
	['$scope', '$http',function($scope,$http){

		$scope.controlador='home_indexController';
          $scope.friends = [
            {name:'John', age:25, gender:'boy'},
            {name:'Jessie', age:30, gender:'girl'},
            {name:'Johanna', age:28, gender:'girl'},
            {name:'Joy', age:15, gender:'girl'}
        ]

        /*var VideosServicePersistenceTechnologies=
        ServiceManager.
        VideoService.
        GetAvailablePersistenceTechnologies();
            
        (function CargasIniciales(){
        ServiceManager.
        VideoService.
        GetVideo(
            ServiceManager.
                EventosService.
                CreateServiceParams(
                VideosServicePersistenceTechnologies.REST,
                $scope,
                $http));

        $interval(function(){
            VideoService.
            EventosService.
            EventosSave(
            ServiceManager.
                EventosService.
                CreateServiceParams(
                VideosServicePersistenceTechnologies.LocalStorage,
                $scope,
                null))
        }, 5000);

        })();*/
			


	}]);
