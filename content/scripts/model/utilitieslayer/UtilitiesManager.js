var UtilitiesManager=
	(function(){

	function privateTranslateText(sourceLG,TargetLG,text,parameters){
		text = text.replace(/\s/g, "+");
		var promise = parameters.http({
            method:'GET',
            url: ConfigurationManager.config.URL_GOOGLE + 'q=' + text + '&target=' + TargetLG + '&source=' + sourceLG + '&key=' + ConfigurationManager.config.API_KEY
        }).
        then(
            function successCallback(response){
                return response.data.data.translations[0].translatedText;
            },
            function errorCallback(response){
                console.log(response.data);
            }           
            );	
        return promise;
	}

	function privateGetBrowser(){
		var parser = new UAParser().getResult();
        return parser.browser.name.toLowerCase();
	}		
		return {
				TranslateText:privateTranslateText,
				GetBrowser:privateGetBrowser
				};
	})();
