ServiceManager.PersistenceManager.VideosDAO_REST=
(function(){

    function privateGetVideos(parameters){
        
        parameters.http({
            method:'GET',
            url:'https://demo5131397.mockable.io/videos'
        }).
        then(
            function successCallback(response){
                parameters.scope.videos=response.data.videos;
            },
            function errorCallback(response){
                console.log(response.data);
            }           
            );

    }

    function privateVideosSave(parameters){
        

    }

    return {
            GetVideos:privateGetVideos,
            VideosSave:privateVideosSave
            };
})();
