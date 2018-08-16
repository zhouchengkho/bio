

var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models'),
  fs = require('fs'),
  http = require('http'),
  https = require('https');


var app = express();
const privateKey = fs.readFileSync('/https_cert/server.key');
const cert = fs.readFileSync('/https_cert/server.crt');
const credentials = { key: privateKey, cert: cert };

let httpServer = http.createServer(app);
let httpsServer = https.createServer(credentials, app);
          
module.exports = require('./config/express')(app, config);

db.sequelize
  .sync()
  .then(function () {
    if (!module.parent) {
         httpServer.listen(config.port, (err) => {
             console.log('http started at' + config.port);
         });
         httpsServer.listen(config.httpsPort, (err) => {
             console.log('https started at ' + config.httpsPort);
         });
    }
  }).catch(function (e) {
    throw new Error(e);
  });

