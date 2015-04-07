import Ember from 'ember';

export function initialize(container) {
  var t = container.lookup('utils:t');
  Ember.I18n = {};
  Ember.I18n.t = t;
  var eachTranslatedAttribute = function(object, fn) {
    var isTranslatedAttribute = /(.+)Translation$/,
        isTranslatedAttributeMatch;

    for (var key in object) {
      isTranslatedAttributeMatch = key.match(isTranslatedAttribute);
      if (isTranslatedAttributeMatch) {
        var translation = object[key] == null ? null : t(object[key]);
        fn.call(object, isTranslatedAttributeMatch[1], translation);
      }
    }
  };
  Ember.I18n.eachTranslatedAttribute = eachTranslatedAttribute;
  Ember.I18n.TranslateableAttributes = Ember.Mixin.create({
    didInsertElement: function() {
      var result = this._super.apply(this, arguments);
      eachTranslatedAttribute(this, function(attribute, translation) {
        this.$().attr(attribute, translation);
      });
      return result;
    }
  });
  Ember.I18n.TranslateableProperties = Ember.Mixin.create({
    _translationObserver: function(sender, propWithSuffix) {
      var prop = propWithSuffix.replace(/Translation$/, '');
      Ember.set(this, prop, t(this.get(propWithSuffix)));
    },

    _addTranslationObservers: function() {
      eachTranslatedAttribute(this, function(attribute, translation) {
        this.addObserver(attribute + 'Translation', this, this._translationObserver);
        Ember.set(this, attribute, translation);
      });
    }.on('init'),

    _removeTranslationObservers: function (){
      eachTranslatedAttribute(this, function(attribute) {
        var propWithSuffix = attribute + 'Translation';
        if(this.hasObserverFor(propWithSuffix)) {
          this.removeObserver(propWithSuffix, this._translationObserver);
        }
      });
    }.on('willDestroyElement','willClearRender')
  });
}

export default {
  name: 'ember-cli-i18n-compatiblity',
  after: 't',
  initialize: initialize
};
