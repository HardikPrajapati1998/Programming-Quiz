var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var jquery_schema = new Schema({


User_marks:Number,
Course:String,
user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
},
created_date:{ type: Date, default: Date.now },
updated_date:{ type: Date, default: Date.now }


});
module.exports  = mongoose.model('jquery',jquery_schema);        