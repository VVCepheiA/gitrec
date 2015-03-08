//DB
var mongoose = require('mongoose');
var dbName = 'gitrec';
var connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString);
var Matrix = require('../../models/matrix');


var jf = require('jsonfile');
var util = require('util');

var file = '../../data/afile.json';

var obj=jf.readFileSync(file);

var ma;

var matrix;


for (var i=0; i<obj.length; i++){
  
  ma={
    "p1id":obj[i].user_id2,
    "p2id":obj[i].user_id,
    "jaccard":obj[i].similarity,
    "overlap":obj[i]["# of common repositories"],
  }


    console.log(ma);


    matrix = new Matrix(ma);
    matrix.save(function(err) {
      if (err) {
        return console.log(err);
      }
    });


}


Matrix.find({ "user_id2": "1007603"}, function(err, matrixies) {
  if (err) {
    return console.log(err);
  }



  console.log("YOOOOOOO");

  for (var j=0; j<matrixes.length; j++){
      console.log(matrixes[j]);
  }
  return console.log("YAAAAAAAAY");
});


