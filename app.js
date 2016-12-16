#!/usr/bin/env node
'use strict';

// Bootstrap application settings
var express = require( 'express' );  // app server
var app = express();
var bodyParser = require( 'body-parser' );  // parser for post requests
app.use( express.static( './public' ) ); // load UI from public folder
app.use( bodyParser.json() );

// Initialize Watson
var WatsonUtils = require('./javascript/watson_utils');
var watson = new WatsonUtils(app);

if (watson.isReady()) {
// Start server
  var port = process.env.VCAP_APP_PORT || 3000;
  app.listen(port, function() {
    console.log('Server running on port: %d', port);
  });
}else{
  console.log("Failed to initialize app");
}