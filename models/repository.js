var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var repositorySchema = new Schema({
  id: { type: Number, default: 0 },
  ownerid: { type: Number, default: 0 },
  size: { type: Number, default: 0 },
  name:  {type: String, default: '' },
  follow: { type: Number, default: 0 },
  star: { type: Number, default: 0 },
  fork: { type: Number, default: 0 },
  language: [],
});
 
module.exports = mongoose.model('Repository', repositorySchema); 

