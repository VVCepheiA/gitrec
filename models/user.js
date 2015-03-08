var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var userSchema = new Schema({
  user_id: { type: Number, default: 0 },
  username: { type: String },
  repos: []
});
 
module.exports = mongoose.model('User', userSchema); 

