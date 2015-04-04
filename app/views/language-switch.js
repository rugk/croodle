import Ember from "ember";

export default Ember.View.extend({
  templateName: 'language-switch',
  
  languages: function() {
    var languages = [];
    var translations = {'en': {}};
    for(var lang in translations) {
      languages.push(lang);
    }
    return languages;
  }.property()
});
