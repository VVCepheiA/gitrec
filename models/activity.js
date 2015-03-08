var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var activitySchema = new Schema({
  act_id: { type: Number, default: 0 },
  type: { type: String, default:''},
  actor_login: { type: String, default: '' },
  repo_name: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});
 
module.exports = mongoose.model('Activity', activitySchema); 

