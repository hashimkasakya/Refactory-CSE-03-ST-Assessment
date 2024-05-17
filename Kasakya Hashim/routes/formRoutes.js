const express = require("express");
const router = express.Router();

// import models

const formModel = require("../models/formModel");

// routes

router.get("/submit", (req,res)=> {
res.render("index");
});
router.post("/submit", async (req,res) => {
try{
const doll = new formModel(req.body)
console.log(form);
await form.save();
res.send("form submitted in the system")
}catch(error){
res.status(400).send("Sorry! something went wrong");
console.log("Error submitting the form", error);
}
});

module.exports=router;