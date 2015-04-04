import Ember from "ember";
/* global moment */
/* global webshim */

export default {
    name: 'i18n',
    initialize: function(container, application) {
        var language = '';
        
        // have a look if it's already stored in a cookie
        var cookie = document.cookie.replace(" ", "").split(";");
        cookie.forEach(function(t){
          var x = t.split("=");
          if (x[0] === "language") {
            language = x[1];
          }
        });
      
        // if not we do it by browser language
        if (language === '') {
          language = (window.navigator.userLanguage || window.navigator.language).split("-")[0];
        }
        
        // check if language is supported
        var translations = {'en': {}};
        if(typeof translations[language] !== "object") {
            language = "en";
        }     
 
	// set language
	Ember.set(application, 'locale', language);
        
        // set moment locale
        moment.locale( language );
        
        // set webshim locale
        webshim.activeLang(language);
    }
};
