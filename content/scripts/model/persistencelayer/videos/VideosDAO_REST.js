ServiceManager.PersistenceManager.VideosDAO_REST=
(function(){

    function privateGetVideos(parameters){
        
        parameters.http({
            method:'GET',
            url: ConfigurationManager.config.URL_BACKEND
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
            url: ConfigurationManager.config.URL_BACKEND + parameters.scope.id
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
            url: ConfigurationManager.config.OMDB_API +'?i='+ parameters.scope.video.id_imdb +'&plot=short&r=json'
        }).
        then(
            function successCallback(response){
                //This part is for requirements, but the best aproach is get data from REST API in current language.
                if (parameters.scope.language == "ar"){

                    UtilitiesManager.TranslateText("en", "ar", response.data.Title, parameters).then(function(translateText){
                       parameters.scope.video.Title = translateText;
                    });
                    UtilitiesManager.TranslateText("en", "ar", response.data.Plot, parameters).then(function(translateText){
                       parameters.scope.video.Plot = translateText;
                    });                                       
                    UtilitiesManager.TranslateText("en", "ar", response.data.Language, parameters).then(function(translateText){
                       parameters.scope.video.Language = translateText;
                    });
                    parameters.scope.video.app_lang = "ar";
                }else{
                    parameters.scope.video.app_lang = "en";
                }
                 angular.extend(parameters.scope.video, response.data);

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
