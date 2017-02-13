angular.module('app').controller('home_indexController',
	['$scope', '$http', '$interval', '$timeout', function($scope,$http,$interval,$timeout){

		$scope.controlador='home_indexController';

        var VideosServicePersistenceTechnologies =
        ServiceManager.
        VideoService.
        GetAvailablePersistenceTechnologies();

        (function InitialLoad(){
        ServiceManager.
        VideoService.
        GetVideo(
            ServiceManager.
                VideoService.
                CreateServiceParams(
                VideosServicePersistenceTechnologies.REST,
                $scope,
                $http));
        
        $interval(function(){
            ServiceManager.
            VideoService.
            VideoSave(
            ServiceManager.
                VideoService.
                CreateServiceParams(
                VideosServicePersistenceTechnologies.LocalStorage,
                $scope,
                null))
        }, 5000);

        $timeout(function(){
            if ($scope.videos == undefined){
                $scope.videos = ServiceManager.
                                VideoService.
                                GetDummyVideoData()    
            }
            
        }, 5000);

        })();
	}]);
