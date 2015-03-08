// var jf = require('jsonfile');
// var util = require('util');
 
// var file = '../../data/2015-03-06-0.json';
// jf.readFile(file, function(err, obj) {
//   console.log(err);
//   console.log(util.inspect(obj));
// });


var jf = require('jsonfile');
var util = require('util');

var file = '../../data/2015-03-06-0-parse.json';
// var file = '../../data/test2.json';
var obj=jf.readFileSync(file);
// console.log(obj[20699].actor.login);
// console.log(obj[20699].id);
// console.log(obj[20699].type);
// console.log(obj[20699].repo.name);

for (var i=0; i<obj.length; i++){
  if (obj[i].type==='ForkEvent' || obj[i].type==='IssuesEvent' || obj[i].type==='PullRequestEvent' || obj[i].type==='PushEvent'   ){
    console.log(obj[i].actor.login);
    console.log(obj[i].id);
    console.log(obj[i].type);
    console.log(obj[i].repo.name);    
  }
}

// console.log(util.inspect(jf.readFileSync(file)));


 
// var fs = require('fs');
// var obj = JSON.parse(fs.readFileSync('../../data/2015-03-06-0.json', 'utf8'));
// console.log(obj);