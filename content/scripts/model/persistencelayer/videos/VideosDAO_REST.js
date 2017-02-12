ServiceManager.PersistenceManager.VideosDAO_REST=
(function(){

    function privateGetVideos(parameters){
        
        parameters.http({
            method:'GET',
            url:'https://demo5131397.mockable.io/videos'
        }).
        then(
            function successCallback(response){
                parameters.scope.videos = response.data.videos;
            },
            function errorCallback(response){
                console.log(response.data);
            }           
            );
    }

    function privateGetVideoById(parameters){
        parameters.http({
            method:'GET',
            url:'https://demo5131397.mockable.io/videos/' + parameters.scope.id
        }).
        then(
            function successCallback(response){
                parameters.scope.video = response.data;
            },
            function errorCallback(response){
                console.log(response.data);
            }           
            );
    }


    function privateGetVideoInfo(parameters){
        parameters.http({
            method:'GET',
            url:'http://www.omdbapi.com/?i='+ parameters.scope.video.id_imdb +'&plot=short&r=json'
        }).
        then(
            function successCallback(response){
                //This part is for requirements, but the best aproach is get data from REST API
                // to this language
                if (parameters.scope.language == "ar")}
                parameters.scope.video = response.data;
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
            GetVideoById:privateGetVideoById,
            GetVideoInfo:privateGetVideoInfo,
            VideosSave:privateVideosSave
            };
})();
