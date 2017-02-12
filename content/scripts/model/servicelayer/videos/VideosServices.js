    ServiceManager.VideoService=
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
                http:_http,
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
                    VideosDAO_REST;
                    break;
                }
                case availablePersistenceTechnologies.LocalStorage:
                {
                    dao=ServiceManager.
                    PersistenceManager.
                    VideosDAO_LocalStorage;
                    break;
                }
            }
            return dao;
        }

        function privateGetVideo(parameters){
            GetDAO(parameters.persistenceTechnology)
            .GetVideos(parameters);

        } 

        function privateGetVideoInfo(parameters){
          console.log(parameters);
            GetDAO(parameters.persistenceTechnology)
            .GetVideoInfo(parameters);

        }

        function privateGetVideoById(parameters){
            GetDAO(parameters.persistenceTechnology)
            .GetVideoById(parameters);

        }  

        function privateVideoSave(parameters){
            GetDAO(parameters.persistenceTechnology)
            .VideosSave(parameters);
        }


        function privateGenerateVideo(){
            return {
                video:UtilitiesManager.GenerateGUID(),
                url:null,
                views:null,
                name:null,
                description:null,
                DBInsertedDate:null
            };
        }


        function privateGetDummyVideoData(){
                    
                    return [
                              {
                              "id":"1",
                              "name":"fixture1",
                              "url":"yahoo.es",
                              "snapshot":"snapshot.jpg",
                              "view":2341
                               },
                              {
                              "id":"2",
                              "name":"fixture2",
                              "url":"google.es",
                              "snapshot":"snapshot.jpg",
                              "view":1235
                               },
                              {
                               "id":"3",
                              "name":"fixture3",
                              "url":"google.es",
                              "snapshot":"snapshot.jpg",
                              "view":1236
                               },
                              {
                              "id":"4",
                              "name":"fixture4",
                              "url":"google.es",
                              "snapshot":"snapshot.jpg",
                              "view":1237
                               }
                            ]
                    
        }

        return {
            GetAvailablePersistenceTechnologies:privateGetAvailablePersistenceTechnologies,
            CreateServiceParams:privateCreateServiceParams,
            GetVideo:privateGetVideo,
            GetVideoInfo:privateGetVideoInfo,
            GetVideoById:privateGetVideoById,
            VideoSave:privateVideoSave,
            GenerateVideo:privateGenerateVideo,
            GetDummyVideoData:privateGetDummyVideoData
        };
    })();
