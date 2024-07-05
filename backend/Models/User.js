const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024
  },
  role:{
    type:String,
    default:"user"
  },
 

},
{timestamps:true}
 
 
);


const User = mongoose.model('users', userSchema);

module.exports = User;
