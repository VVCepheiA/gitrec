var express = require('express');
var router = express.Router();
var Matrix = require('../../models/matrix');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  // console.log(req.params.gitID);
  res.send("WHAT");
});


router.get('/api/:gitid', function(req, res, next) {
  var gitid = req.params.gitid;
  

  res.send(gitid);
});

module.exports = router;
 