//DB
var mongoose = require('mongoose');
var dbName = 'gitrec';
var connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString);


var Activity = require('../../models/activity');


var jf = require('jsonfile');
var util = require('util');

var file = '../../data/2015-03-06-0-parse.json';

var obj=jf.readFileSync(file);

var act;

var activity;


// for (var i=0; i<obj.length; i++){
//   if (obj[i].type==='ForkEvent' || obj[i].type==='IssuesEvent' || obj[i].type==='PullRequestEvent' || obj[i].type==='PushEvent'   ){
//     act={
//       "act_id":obj[i].id,
//       "type":obj[i].type,
//       "actor_login":obj[i].actor.login,
//       "repo_name":obj[i].repo.name,
//       "createdAt":obj[i].repo.created_at,
//     };

//     console.log(act);


//     activity = new Activity(act);
//     activity.save(function(err) {
//       if (err) {
//         return console.log(err);
//       }
//     });

//   }
// }


Activity.findOne({ "act_id": "2628581617"}, function(err, activity) {
  if (err) {
    return console.log(err);
  }
  console.log("YOOOOOOO");
  console.log(activity);
  return console.log("YAAAAAAAAY");
});

Activity.find().distinct('actor_login', function(error, ids) {
    console.log(ids);
    console.log(ids.length);
});

