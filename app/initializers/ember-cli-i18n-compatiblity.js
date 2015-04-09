import Ember from 'ember';
import ValidationMessages from 'ember-validations/messages';

export function initialize(container, application) {
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
        
        var self = this;
        Ember.addObserver(application, 'locale', function() {
          self.notifyPropertyChange(attribute + 'Translation');
        });
        
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

  ValidationMessages.render = function(attribute, context) {
    return this.replaceRegex(t('errors.' + attribute, context), context);
  };

  ValidationMessages.replaceRegex = function(text, context) {
    var regex = new RegExp("{{(.*?)}}"),
      attributeName = "";

    var result = text.toString();
    while (regex.test(result)) {
      attributeName = regex.exec(result)[1];
      result = result.replace(regex, context[attributeName]);
    }

    return result;
  };

  Ember.EasyForm.processOptions = function(property, options) {
    if (options) {
      var bindView = options.data.view;
      Ember.addObserver(application, 'locale', bindView, bindView.rerender);
      
      var eachTranslatedAttribute = Ember.I18n.eachTranslatedAttribute || Ember.EasyForm.eachTranslatedAttribute;
      eachTranslatedAttribute(options.hash, function (attribute, translation) {
        options.hash[attribute] = translation;
        delete options.hash[attribute + 'Translation'];
      });
      
      options.hash.property = property;
    } else {
      options = property;
    }

    return options;
  };
}

export default {
  name: 'ember-cli-i18n-compatiblity',
  after: 't',
  initialize: initialize
};
