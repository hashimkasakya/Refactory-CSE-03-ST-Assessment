// IMPORTING DEPENDENCIES

const express = require("express");// FOR POSTING
const mongoose = require("mongoose");// FOR MONGODB
const path = require("path");// FOR  PUG


require("dotenv").config();

// import route
const formRoutes = require("./routes/formRoutes");

const app = express();


// CONFIGURATIONS

mongoose.connect(process.env.DATABASE,{
useNewUrlParser:true,
useUnifiedTopology:true,
});
mongoose.connection
.once("open", ()=>{
console.log("Mongoose connection successful");
})
.on("error", err => {
console.log(`Connection error: ${err.message}`);
});

app.set("view engine","pug");//setting the view engine tp pug
app.set("views", path.join(__dirname, "views"));//specify the directory where the views are found

// MIDDLEWARE

app.use(express.static(path.join(__dirname, "public")));//set directory for static files
app.use(express.urlencoded({extended:true}));
app.use(express.json());// return data in the response path

// // ROUTES - end points of our server
app.get("/" , (req,res)=>{
res.render("index");
});
// use imported routes 

app.use("/", formRoutes);


// FOR INVALID ROUTES

app.get("*", (req, res) => {
res.send("404! This is an invalid URL");
});

// BOOTSTRAPPPING THE SERVER this must be the last line in the code

app.listen(3600, () => console.log("listening on port 3600")); // this is where the server port is set
