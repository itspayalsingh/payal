const express = require("express");
 
const { auth } = require("../middleware/auth.middleware");
const { note_model } = require("../models/note.model");
const note_router= express.Router();
note_router.use(auth)
note_router.use(express.json())
// note_router.use(auth)

note_router.post("/add",async(req,res)=>{
   const payload= req.body;
    const data= await new note_model(payload);
    data.save();
    res.send(data)
})


note_router.get("/",(req,res)=>{
    res.send("all the notes....")
})


module.exports = {note_router};