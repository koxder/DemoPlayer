ServiceManager.PersistenceManager.VideosDAO_LocalStorage=
(function(){

    function privateGetVideos(parameters){
        parameters.scope.videos=
        JSON.parse(
            localStorage.getItem('Videos'));
    }

    function privateVideosSave(parameters){
        
        localStorage.setItem('Videos',
        JSON.stringify(parameters.scope.videos));

    }
    return {
            GetVideos:privateGetVideos,
            VideosSave:privateVideosSave
            };
})();
