const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
    
});
//password encryption
userSchema.pre("save", async function(next){

    console.log("I am the preSave function")
    
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10) 
    }
    //console.log("i am autoSet", this.password)
    next();
});

userSchema.methods.generateAuthToken = async function (){
    const token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({
        token: token,
    });
    await this.save();
    return token;
};

const User = mongoose.model('USER', userSchema); // 1st arg name of model
//2nd arg on which schema it should form model

//we export the user data
module.exports = User;