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
            .GetVideo(parameters);
        } 

        function privateVideoSave(parameters){
            GetDAO(parameters.persistenceTechnology)
            .VideosSave(parameters);
        }


        function privateGenerateVideo(){
            return {
                id:UtilitiesManager.GenerateGUID(),
                url:null,
                views:null,
                name:null,
                description:null,
                DBInsertedDate:null
            };
        }

        return {
            GetAvailablePersistenceTechnologies:privateGetAvailablePersistenceTechnologies,
            CreateServiceParams:privateCreateServiceParams,
            GetVideo:privateGetVideo,
            VideoSave:privateVideoSave,
            GenerateVideo:privateGenerateVideo
        };
    })();
