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

var user,repo, cleanuser, cleanrepo, newuser, repository, option;

Activity.find().distinct('actor_login', function(error, ids) {
  console.log(ids);
  console.log(ids.length);


  for(var j=0; j<ids.length; j++){

    options = {
      url: 'https://api.github.com/users/'+ids[j],
      headers: {
          'User-Agent': 'VVCepheiA'
      },
    };
    request(options, function (err, res, body) {
      if (err) return console.log(err);
      console.log("API");


      user=JSON.parse(body);
      console.log(user);

    


      console.log(user.repos_url);
      // console.log(res.repos_url);
      options.url=user.repos_url;
      cleanuser={
        "user_id":user.id,
        "username":user.login,
        "repos":[]
      }



      request(options, function (err, res2, body2) {
        repos=JSON.parse(body2);

        for(var i=0; i< repos.length; i++){
          console.log(user.login+"/"+repos[i].name);

          cleanrepo={
            "id":repos[i].id,
            "ownerid": repos[i].owner.id,
            "size": repos[i].size,
            "name": repos[i].name,
            "follow": repos[i].watchers,
            "star": repos[i].stargazers_count,
            "fork": repos[i].forks_count,
            "language": repos[i].language
          }
          cleanuser.repos.push(repos[i].id);

          repository = new Repository(cleanrepo);
          repository.save(function(err) {
            if (err) {
              return console.log(err);
            }
          });

        }

        newuser = new User(cleanuser);
        newuser.save(function(err) {
          if (err) {
            return console.log(err);
          }
        });

      });
      console.log("done");


    });



      // console.log(repo);
    
  }

});


