const { json } = require("express/lib/response");
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/test", {useNewUrlParser:true,useUnifiedTopology:true});

var db = mongoose.connection

db.on("error", console.error.bind(console, "connection error"));

db.on("open", ()=>{
    console.log("Connection successful")
})

const userSchema = new mongoose.Schema({
    fullname: String,
    username: String,
    password: String, 
    email: String,
    gender: Number,
    // cart : {type: Array, default: [1]},
    cart: Array
})
const User = mongoose.model("User", userSchema)




module.exports = {
    "User": User,
}