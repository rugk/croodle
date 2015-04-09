import Ember from "ember";

export default Ember.View.extend({
  actions: {
    moreOptions: function(){
      // create new Option
      this.get('controller.optionsTexts').pushObject({
        'value': ''
      });
    }
  },

  locale: function() {
    return this.get('container').lookup('application:main').get('locale');
  }.property('locale'),

  localeObserver: function() {
    var self = this,
        application = this.get('container').lookup('application:main');
    Ember.addObserver(application, 'locale', function() {
      self.notifyPropertyChange('locale');
    });
  }.on('init')
});
