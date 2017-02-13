angular.module('app').
controller('player_indexController',
        ['$scope','playerID','$http','$rootScope',
        function($scope,playerID,$http,$rootScope){            
        
        $scope.id = playerID;
        $scope.$parent.homepage = "no-sidebar";
        $scope.dash_player_visibility = false;
        $scope.native_player_visibility = false;
        $scope.language = $rootScope.language;
        
        $scope.$on('changeLanguageEvent', function(event, data){            
            if ($scope.language != $rootScope.language){
                $scope.language = $rootScope.language;
                ServiceManager.
                VideoService.
                GetVideoInfo(
                    ServiceManager.
                    VideoService.
                    CreateServiceParams(
                    VideosServicePersistenceTechnologies.REST,
                    $scope,
                    $http));
            }            
        });


        var VideosServicePersistenceTechnologies =
        ServiceManager.
        VideoService.
        GetAvailablePersistenceTechnologies();
     

        ServiceManager.
        VideoService.
        GetVideoById(
            ServiceManager.
                VideoService.
                CreateServiceParams(
                VideosServicePersistenceTechnologies.LocalStorage,
                $scope,
                $http));

        ServiceManager.
        VideoService.
        GetVideoInfo(
            ServiceManager.
                VideoService.
                CreateServiceParams(
                VideosServicePersistenceTechnologies.REST,
                $scope,
                $http));



        // This part should be in a player service, and add player dinamically

        if (UtilitiesManager.GetBrowser()=='safari' ){
            $scope.native_player_visibility = true;
            $scope.dash_player_visibility = false;
        }else{
            $scope.dash_player_visibility = true;

                (function(){
                var url = $scope.video.url;
                console.log(url);
                var player = dashjs.MediaPlayer().create();
                player.initialize(document.querySelector("#videoPlayer"), url, true);
            })();
        };
    }]);
