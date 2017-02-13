var translationsEN = {
  TITTLE: 'Player Demo',
  SLOGAN: 'Be water',
  GITHUB: 'Github',
  LINKEDIN: 'Linkedin',
  NAME: 'Castor Duran Barreiro . &copy; All rights reserved. ',
  CAROUSEL_TITTLE : 'Videos',
  BUTTON_LANG_AR: 'Arabian',
  BUTTON_LANG_EN: 'English',
  LANGUAGE: 'Language:',
  TITLE_MOVIE: 'Tittle:',
  YEAR: 'Year:',
  PLOT: 'Plot:'
};
 
var translationsAR= {
  TITTLE: 'لاعب تجريبي',
  SLOGAN: 'يكون الماء',
  GITHUB: 'جيثب',
  LINKEDIN: 'ينكدين',
  NAME: 'Castor Duran Barreiro . &copy; كل الحقوق محفوظة. ',
  CAROUSEL_TITTLE : 'أشرطة فيديو',
  BUTTON_LANG_AR: 'اللغة العربية',
  BUTTON_LANG_EN: 'اللغة الانجليزية',
  LANGUAGE: 'لغة',
  TITLE_MOVIE: 'عنوان',
  YEAR: 'عام',
  PLOT: 'قطعة'
};

angular.module('app').config(
  function ($translateProvider) {
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('ar', translationsAR);
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

});

