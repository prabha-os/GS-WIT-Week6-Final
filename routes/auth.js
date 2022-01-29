const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const User=require('../models/userModel');
const authenticate = require('../middleware/authenticate');


//frontend is needed for posting
router.post("/register", async (req, res) => {
    const { name, email, phone, password } = req.body;
  
    if (email && name && phone && password) {
      const newUser = new User({ name, email, phone, password });
  
      const userExist = await User.findOne({ email });
  
      if (userExist) {
        return res.status(400).json({ error: "User is already registered" });
      }
  
      console.log("Hello the user exists", userExist);
      const userRegistered = newUser.save();
  
      if (userRegistered) {
        return res.json({ success: "User is registered successfully" });
      } else {
        return res
          .status(500)
          .json({ error: "Opps! Some error occured while trying to register" });
      }
    } else {
      res.status(406).json({ error: "Please fill all the required fields" });
    }
  });
  
  // login
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    if (email && password) {
      const userFound = await User.findOne({ email: email });
  
      if (userFound) {
        const passwordMatch = await bcrypt.compare(password, userFound.password);
  
        const token = await userFound.generateAuthToken();
        res.cookie("jsonWebToken", token, {
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
        });
  
        if (passwordMatch) {
          res.json({ message: "Match" });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    } else {
      res.status(404).json({ message: "Please fill all the fields" });
    }
  });

router.get("/learn", authenticate, (req,res) => {
    console.log("After", req.user);
    res.send(req.user);

})

router.get("/logout", (req, res) => {
    res.clearCookie("jsonWebToken");
    res.send({ success: true, message: "User Logged Out Successfully" });
  });

/*
in postman under post method 
in the header section we give Content-Type as application/json */
module.exports = router;