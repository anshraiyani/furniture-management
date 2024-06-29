const mongoose = require("mongoose");

const connectToMongo = ()=>{
    mongoose.connect("mongodb+srv://anshraiyani13:123@cluster0.u8l2ugf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then( console.log("Connected to MongoDB Succesfully") )
    .catch( err => console.log(err));
    
}

module.exports = connectToMongo;