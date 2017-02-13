angular.module('app').config(
	function($routeProvider){

$routeProvider.
	when('/',{
		templateUrl:'content/views/home/index.html',
		controller:'home_indexController'
	}).
	when('/player/:id',{
	templateUrl:'content/views/player/index.html',
	controller:'player_indexController',
    resolve: {
        playerID: function ($route) {
            return $route.current.params.id;
        }
    }	
	})
	.otherwise({
		redirectTo:'/'
	});
});
