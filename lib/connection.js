'use strict'

var nforce = require('nforce');

//var org = nforce.createConnection({
//  clientId: process.env.CLIENT_ID,
//  clientSecret: process.env.CLIENT_SECRET,
//  redirectUri: 'http://localhost:3000/oauth/_callback',
//  environment: 'production',
//  mode: 'single'
//});
var org = nforce.createConnection({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.CLIENTSECRET,
  redirectUri: 'http://localhost:3000/oauth/_callback',
  apiVersion: 'v34.0',  // optional, defaults to current salesforce API version
  environment: 'production',  // optional, salesforce 'sandbox' or 'production', production default
  mode: 'single', // optional, 'single' or 'multi' user mode, multi default
  autoRefresh: true
});

org.authenticate({ username: process.env.USERNAME, password: process.env.PASSWORD}, function(err, resp){
  // the oauth object was stored in the connection object
  //if(!err) console.log('Successfully connected to Salesforce. Cached token: ' + org.oauth.access_token);
  if(!err) console.log('Successfully connected to Salesforce. Cached token: ' + org.oauth);
  if(err) console.log('Cannot connect to Salesforce: ' + err);
});

module.exports = org;
