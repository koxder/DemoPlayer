ServiceManager.PersistenceManager.EventosDAO_LocalStorage=
(function(){

	function privateGetEventos(parameters){
		parameters.scope.eventos=
		JSON.parse(
			localStorage.getItem('Eventos'));
	}

	function privateEventosSave(parameters){
		
		localStorage.setItem('Eventos',
		JSON.stringify(parameters.scope.eventos));

	}
	return {
			GetEventos:privateGetEventos,
			EventosSave:privateEventosSave
			};
})();
