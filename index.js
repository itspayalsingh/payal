const express = require("express");
const mongoose = require("mongoose");
const { note_router } = require("./routes/note.route");
const { user_router } = require("./routes/user.route");
// const { note_router } = require("./routes/note.route");
// const { user_router } = require("./routes/user.routes");
const connection =  mongoose.connect("mongodb+srv://payal:singh@cluster0.z7gnmlk.mongodb.net/dayone?retryWrites=true&w=majority")
const app =  express();
app.use(express.json())

// app.use("/user",user_router)
app.use("/user",user_router)
// app.use("/note",note_router)
app.use("/note",note_router)

app.listen(9090,async()=>{
    try {
        await connection
        console.log("server connected to db");
    } catch (error) {
        console.log(error);
    }
    console.log("server id running at 9090");
})