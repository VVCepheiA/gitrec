var request = require('request');
request('https://api.github.com/repos/octocat/Hello-World', function (err, res, body) {
  if (err) return console.log(err);
  console.log("Getting started");
  console.log(res);
});



