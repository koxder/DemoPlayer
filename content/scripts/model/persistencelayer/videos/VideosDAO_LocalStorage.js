ServiceManager.PersistenceManager.VideosDAO_LocalStorage=
(function(){

    function privateGetVideos(parameters){
        parameters.scope.videos=
        JSON.parse(
            localStorage.getItem('Videos'));
    }

    function privateGetVideoById(parameters){
        console.log("Private Get Videos ");
        videos= JSON.parse(
                localStorage.getItem('Videos'));
        
        video = videos.filter(x => x.id == parameters.scope.id)
        if (video){
            parameters.scope.video = video[0];
        }
    }

    function privateGetVideoInfo(parameters){
            //Implement

    }

    function privateVideosSave(parameters){
        
        localStorage.setItem('Videos',
        JSON.stringify(parameters.scope.videos));

    }
    return {
            GetVideos:privateGetVideos,
            GetVideoById:privateGetVideoById,
            GetVideoInfo:privateGetVideoInfo,
            VideosSave:privateVideosSave
            };
})();
