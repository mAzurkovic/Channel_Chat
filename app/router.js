import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('channels', function() {
    this.route('random');
  });
  this.route('channels');
});

export default Router;
