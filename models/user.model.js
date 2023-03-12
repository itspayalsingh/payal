const mongoose =  require("mongoose")
const user_schema =  mongoose.Schema({
    email:String,
    password:String,
})


const user_model = mongoose.model("userdata" , user_schema)

module.exports =  {user_model};