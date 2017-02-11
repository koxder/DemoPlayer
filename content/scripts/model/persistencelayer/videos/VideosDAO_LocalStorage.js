ServiceManager.PersistenceManager.EventosDAO_LocalStorage=
(function(){

    function privateGetEventos(parameters){
        parameters.scope.videos=
        JSON.parse(
            localStorage.getItem('Videos'));
    }

    function privateEventosSave(parameters){
        
        localStorage.setItem('Videos',
        JSON.stringify(parameters.scope.videos));

    }
    return {
            GetEventos:privateGetEventos,
            EventosSave:privateEventosSave
            };
})();
