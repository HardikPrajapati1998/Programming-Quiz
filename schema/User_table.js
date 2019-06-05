var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user_schema = new Schema({

User_name:{type:String},
User_email:String,
User_password:String,
created_date:{ type: Date, default: Date.now },
updated_date:{ type: Date, default: Date.now }


});
module.exports  = mongoose.model('User',user_schema);                                                                                               