angular.module('app').
controller('player_indexController',
        ['$scope','playerID','$rootScope',
        function($scope,playerID,$rootScope){
            
            console.log(playerID);
            $scope.id = playerID;
            $scope.$parent.homepage = "no-sidebar";
    }]);
