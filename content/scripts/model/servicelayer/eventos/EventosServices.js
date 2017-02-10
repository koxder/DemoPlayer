	ServiceManager.EventosService=
	(function(){
	
		function privateGetAvailablePersistenceTechnologies(){
			return{REST:0,LocalStorage:1};
		}

		function privateCreateServiceParams(
			_persistenceTechnology,_scope,_http){
			var params=
			{
				persistenceTechnology:_persistenceTechnology,
				scope:_scope,
				http:_http
			}
			return params;
		}

		function GetDAO(persistenceTechnology){
			var dao=null;
			var availablePersistenceTechnologies=
			privateGetAvailablePersistenceTechnologies();

			switch(persistenceTechnology)
			{
				case availablePersistenceTechnologies.REST:
				{
					dao=ServiceManager.
					PersistenceManager.
					EventosDAO_REST;
					break;
				}
				case availablePersistenceTechnologies.LocalStorage:
				{
					dao=ServiceManager.
					PersistenceManager.
					EventosDAO_LocalStorage;
					break;
				}
			}
			return dao;
		}

		function privateGetEventos(parameters){

			GetDAO(parameters.persistenceTechnology)
			.GetEventos(parameters);
		} 

		function privateEventosSave(parameters){
			GetDAO(parameters.persistenceTechnology)
			.EventosSave(parameters);
		}


		function privateGenerarEvento(){
			return {
				Id:UtilitiesManager.GenerateGUID(),
				Inscritos:null,
				Sesiones:null,
				Nombre:null,
				Descripcion:null,
				DBInsertedDate:null
			};
		}

		return {
			GetAvailablePersistenceTechnologies:privateGetAvailablePersistenceTechnologies,
			CreateServiceParams:privateCreateServiceParams,
			GetEventos:privateGetEventos,
			EventosSave:privateEventosSave,
			GenerarEvento:privateGenerarEvento
		};
	})();
