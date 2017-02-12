angular.module('app').
controller('player_indexController',
        ['$scope','playerID','$http','$rootScope',
        function($scope,playerID,$http,$rootScope){
            
        $scope.id = playerID;
        $scope.$parent.homepage = "no-sidebar";
        $scope.dash_player_visibility = false;
        $scope.native_player_visibility = false;
        $scope.language = $rootScope.language;
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

        //Move this part to a PlayerServices or Utilities
        console.log($rootScope.language)
        var parser = new UAParser().getResult();
        browser = parser.browser.name.toLowerCase();
        os = parser.os.name.toLowerCase();        
        if (browser=='safari' ){
            $scope.native_player_visibility = true;
        }else{
            $scope.dash_player_visibility = true;
        };
    }]);
