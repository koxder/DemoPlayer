ServiceManager.PersistenceManager.EventosDAO_REST=
(function(){

	function privateGetEventos(parameters){
		
		parameters.http({
			method:'GET',
			url:'http://10.0.4.150/EventosApi/Eventos'
		}).
		then(
			function successCallback(response){
				parameters.scope.eventos=response.data;
			},
			function errorCallback(response){
				console.log(response.data);
			}			
			);

	}

	function privateEventosSave(parameters){
		
		parameters.http({
			method:'POST',
			url:'http://10.0.4.150/EventosApi/Eventos',
			data:parameters.scope.eventos
		}).
		then(
			function successCallback(response){
				parameters.scope.eventos=response.data;
			},
			function errorCallback(response){
				console.log(response.data);
			}			
			);
	}

	return {
			GetEventos:privateGetEventos,
			EventosSave:privateEventosSave
			};
})();
