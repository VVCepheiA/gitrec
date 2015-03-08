var request = require('request');
var mongoose = require('mongoose');
var dbName = 'gitrec';
var connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString);
var Activity = require('../../models/activity');
var jf = require('jsonfile');
var util = require('util');

Activity.find().distinct('actor_login', function(error, ids) {
  console.log(ids);
  console.log(ids.length);

  request('https://api.github.com/users/'+ids[0], function (err, res, body) {
    if (err) return console.log(err);
    console.log("API");
    console.log(body);
  });

});