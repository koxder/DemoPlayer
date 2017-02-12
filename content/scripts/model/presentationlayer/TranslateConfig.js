var translationsEN = {
  TITTLE: 'Player Demo',
  SLOGAN: 'make the different',
  GITHUB: 'Github',
  LINKEDIN: 'Linkedin',
  NAME: 'Castor Duran Barreiro . &copy; All rights reserved. ',
  CAROUSEL_TITTLE : 'Videos',
  BUTTON_LANG_AR: 'Arabian',
  BUTTON_LANG_EN: 'English'
};
 
var translationsAR= {
  TITTLE: 'Player Demo AR',
  SLOGAN: 'make the different AR',
  GITHUB: 'Github',
  LINKEDIN: 'Linkedin',
  NAME: 'Castor Duran Barreiro . &copy; All rights reserved. ',
  CAROUSEL_TITTLE : 'Videos AR',
  BUTTON_LANG_AR: 'Arabian',
  BUTTON_LANG_EN: 'Englisch'
};



angular.module('app').config(
                  function ($translateProvider) {
                  $translateProvider.translations('en', translationsEN);
                  $translateProvider.translations('ar', translationsAR);
                  $translateProvider.preferredLanguage('en');
                  $translateProvider.fallbackLanguage('en');
              });

