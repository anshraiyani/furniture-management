const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required:true,
    },
    // rental_history:[{
    //     type: 
    // }]

},{timestamps:true});

const User = mongoose.model('user',UserSchema);
module.exports = User;