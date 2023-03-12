const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { user_model } = require("../models/user.model");
const user_router = express.Router();
user_router.use(express.json());

user_router.get("/",(req,res)=>{
    res.send("user are available here")
})


user_router.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await user_model.find({ email: email })
        // console.log(user);
        if (user.length) {
            res.send("email id is already regestired please login")
        } else {
            bcrypt.hash(password, 4, (err, ans) => {
                if (err) {
                    console.log(err);
                } else {
                    const data = new user_model({ email, password: ans })
                    data.save()
                    res.send("user have been created")
                }
            })

        }
    } catch (error) {
        console.log(error);
    }
})


user_router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let user = await user_model.find({ email: email })
    if (user.length) {
        // console.log(user[0]._id);
        bcrypt.compare(password, user[0].password, (err, ans) => {
            if (err) {
                console.log("password is incorrect");
            } else {
                const token = jwt.sign({ userID: user[0]._id }, "masai", {
                    expiresIn: '1h'
                })
 
                 
              res.send({msg:token})

            }
        })
    }
})



module.exports = { user_router };