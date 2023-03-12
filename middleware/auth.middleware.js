const jwt = require("jsonwebtoken");



const auth = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        const decoded = jwt.verify(token, "masai")
        console.log(decoded);
        if (decoded) {
            const userid = decoded.userID;
            req.body.userID = userid;
            next()
        } else {
            res.send("please login first")
        }
    } else {
        res.send("please login first")
    }
 
}


module.exports = {auth}