angular.module('app').
controller('indexController',
		['$scope','$rootScope','$translate',
		function($scope,$rootScope,$translate){
            $rootScope.language = "en";
			$scope.controlador='indexController';
            $scope.homepage = "homepage";
            $scope.direction = "ltr"

            $scope.changeLanguage = function (langKey) {
                $translate.use(langKey);
                if (langKey == "ar"){
                    $rootScope.language = "ar";
                    $scope.direction = "rtl";
                }else{
                    $rootScope.language = "en";
                    $scope.direction = "ltr";
                }
                $rootScope.$broadcast('changeLanguageEvent', {
                    data: ''
                });                       
            };


	}]);
