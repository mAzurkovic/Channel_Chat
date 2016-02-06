/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

app.import("bower_components/foundation-sites/dist/foundation.css");
app.import("bower_components/foundation-sites/dist/foundation.js");

  return app.toTree();
};
