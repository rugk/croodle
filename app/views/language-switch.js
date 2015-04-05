import Ember from "ember";

export default Ember.View.extend({
  templateName: 'language-switch',
  
  availableLocales: function() {
    var application = this.get('container').lookup('application:main');

    return application.get('availableLocales');
  }.property(),

  locale: function(key, value) {
    var application = this.get('container').lookup('application:main');
    
    if(arguments.length > 1) {
      application.set('locale', value);
    }
    
    return application.get('locale');
  }.property()
});
