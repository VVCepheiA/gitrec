var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var matrixSchema = new Schema({
  p1id: { type: Number, default: 0 },
  p2id:  { type: Number, default: 0 },
  jaccard:  { type: Number, default: 0 },
  overlap:  { type: Number, default: 0 },
});
 
module.exports = mongoose.model('Matrix', matrixSchema); 

