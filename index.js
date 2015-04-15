// Modules
var express = require('express');
var app = express();
var config = require('./lib/config');

// Static, public dir
app.use(express.static(__dirname + '/public'));

console.log(config);

// Run
app.listen(config.service.port, function () {
  console.log('Running over', config.service.port);
});
