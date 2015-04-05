import Ember from "ember";
/* global moment */
/* global webshim */
/* global requirejs */

export default {
    name: 'i18n',
    initialize: function(container, application) {
        var locale = '';
        var availableLocales;
        var localeIsAvailable = function(locale) {
          return availableLocales.indexOf(locale) !== -1;
        };
        var setLocale = function(locale) {
          
        };
        
        // get available locales by modules and store them in application
        availableLocales = Ember.keys(requirejs.entries).filter(function(module) {
          return module.match(new RegExp(application.get('modulePrefix') + '/locales/'));
        }).map(function(localesModule) {
          return localesModule.replace(application.get('modulePrefix') + '/locales/', '');
        });
        application.set('availableLocales', availableLocales);
        
        // get locale if it's already stored in a cookie
        var cookie = document.cookie.replace(" ", "").split(";");
        cookie.forEach(function(t){
          var x = t.split("=");
          if (x[0] === "locale") {
            locale = x[1];
          }
        });
      
        // otherwise set locale by browser language
        if (!locale) {
          locale = (window.navigator.userLanguage || window.navigator.language).split("-")[0];
        }

        // use default locale if locale is not available
        if(!localeIsAvailable(locale)) {
          locale = application.get('defaultLocale');
        }
        
        if(locale !== application.get('locale')) {
          application.set('locale', locale);
        }
        // set locale of libaries used
        moment.locale(locale);
        webshim.activeLang(locale);

        // update locale of libaries used if application locale changes
        Ember.addObserver(application, 'locale', function() {
          var locale = application.get('locale');
          moment.locale(locale);
          webshim.activeLang(locale);
        });
    }
};
