const mongoose= require("mongoose")

const note_schema= mongoose.Schema({
    name:String,
    userID:String,
})

const note_model= mongoose.model("fsnote",note_schema)

module.exports={note_model};