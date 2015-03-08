var request = require('request');
var bodyParser = require('body-parser')

var mongoose = require('mongoose');
var dbName = 'gitrec';
var connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString);
var Activity = require('../../models/activity');
var User = require('../../models/user');
var Repository = require('../../models/repository');


var jf = require('jsonfile');
var util = require('util');

var user,repo, cleanuser, cleanrepo, newuser, repository;

Activity.find().distinct('actor_login', function(error, ids) {
  console.log(ids);
  console.log(ids.length);

  var options = {
    url: 'https://api.github.com/users/'+ids[0],
    headers: {
        'User-Agent': 'VVCepheiA'
    },
  };
  request(options, function (err, res, body) {
    if (err) return console.log(err);
    console.log("API");
    user=JSON.parse(body);
    console.log(user.repos_url);
    // console.log(res.repos_url);
    options.url=user.repos_url;
    cleanuser={
      "user_id":user.id,
      "username":user.login,
      "repos":[]
    }

    request(options, function (err, res, body) {
      repo=JSON.parse(body);

      for(var i=0; i< repo.length; i++){

        cleanrepo={
          "id":repo[i].id,
          "ownerid": repo[i].owner.id,
          "size": repo[i].size,
          "name": repo[i].name,
          "follow": repo[i].watchers,
          "star": repo[i].stargazers_count,
          "fork": repo[i].forks_count,
          "language": repo[i].language
        }
        cleanuser.repos.push(repo[i].id);

        repository = new Repository(cleanrepo);
        repository.save(function(err) {
          if (err) {
            return console.log(err);
          }
        });

      }

      newuser = new User(cleanrepo);
      newuser.save(function(err) {
        if (err) {
          return console.log(err);
        }
      });


      // console.log(repo);
    });
  });

});


