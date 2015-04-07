import Ember from "ember";
import getLocales from "ember-cli-i18n-locales/utils/get-locales";

export default Ember.View.extend({
  templateName: 'language-switch',
  
  availableLocales: function() {
    return getLocales();
  }.property(),

  locale: function(key, value) {
    var application = this.get('container').lookup('application:main');
    
    if(arguments.length > 1) {
      application.set('locale', value);
    }
    
    return application.get('locale');
  }.property()
});
