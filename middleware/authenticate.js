const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticate = async (req, res, next) => {
    try{
    const token = req.cookies.jsonWebToken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const verifiedUser = await User.findOne({
        _id: verifyToken._id, 
        "tokens.token": token,
    });
    
    console.log("Before", req.user);

    if(!verifiedUser){
        throw new Error("User not found");
    }

    req.token = token;
    req.userId = verifiedUser._id;
    req.user = verifiedUser;

    console.log("Verified User", verifiedUser);

    next();
    } catch (err) {
        res.status(401).send("Unauthorised Access");
        console.log(err);
    }
};

module.exports = authenticate;