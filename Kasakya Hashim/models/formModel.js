const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
firstname:{
type:String,
trim:true
},
lastname:{
type:String,
trim:true
},
Course:{
type:String,
trim:true
},
entryScheme:{
type:String,
trim:true
},
intake:{
type:String,
trim:true
},
sponsorship:{
type:String,
trim:true
},
gender:{
type:String,
trim:true
},
dob:{
type:String,
trim:true
},
residence:{
type:String,
trim:true
},
});

module.exports = mongoose.model("formModel", formSchema);