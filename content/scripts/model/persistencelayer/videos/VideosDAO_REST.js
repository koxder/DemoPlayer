ServiceManager.PersistenceManager.EventosDAO_REST=
(function(){

    function privateGetEventos(parameters){
        
        parameters.http({
            method:'GET',
            url:'https://demo5131397.mockable.io/videos'
        }).
        then(
            function successCallback(response){
                parameters.scope.videos=response.data;
            },
            function errorCallback(response){
                console.log(response.data);
            }           
            );

    }

    function privateEventosSave(parameters){
        

    }

    return {
            GetEventos:privateGetEventos,
            EventosSave:privateEventosSave
            };
})();
