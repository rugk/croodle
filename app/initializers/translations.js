import Ember from "ember";
import getLocales from "ember-cli-i18n-locales/utils/get-locales";
/* global moment */
/* global webshim */

export default {
  name: 'i18n',
  initialize: function(container, application) {
    var locale = '';
    var availableLocales = getLocales();
    var localeIsAvailable = function(locale) {
      return availableLocales.indexOf(locale) !== -1;
    };
   
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

      // update locale of libaries used if application locale changes
      moment.locale(locale);
      webshim.activeLang(locale);

      // store or update selected locale in cookie
      document.cookie="locale=" + locale + ";" +
                      // give cookie a lifetime of one year
                      "max-age=" + 60*60*24*356 + ";";
    });
  }
};
