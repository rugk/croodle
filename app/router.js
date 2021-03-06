import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('poll', { path: '/poll/:poll_id' }, function() {
    this.route('participation');
    this.route('evaluation');
  });
  this.route('create', function() {
    this.route('meta');
    this.route('options');
    this.route('options-datetime');
    this.route('settings');
  });
  this.route('404');
});

export default Router;
