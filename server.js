/**
 to run on terminal we write node server.js (our file name) and to exit from the file we do ctrl+c
but everytime we make changes we come out of the server and restart it
to avoid this we install nodemon using npm i nodemon
to run the server globally we use command npx nodemon server.js
 */

//npm init -y will give us the package.json file
const express = require('express'); //npm i express (we get nodemodules and packages-lock.json with this)
const auth = require('./routes/auth.js');
const dotenv = require('dotenv');
//installed mongoose using command npm i mongoose
const app = express(); //this will intialize app
var cookieParser = require('cookie-parser');

dotenv.config({path: "./config.env"}) //the path of env is given here 
//this env file is having the DBURL

app.use(express.json()); //to get the postman request
app.use(cookieParser());
require('./db/conn'); //we are connecting the conn.js which has mongoose part in it

app.use(auth)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})


/*
const loggedIn =true
const wallet= true


const middleware1 = (req, res, next) => {
    console.log("Cheaking if the user is Logged IN")
    //we go to next when our condition is satisfied
    if(loggedIn) {
        next(); 
    } else {
        res.send("User is not Logged IN")
    }
}

const middleware2 = (req, res, next) => {
    console.log("Cheaking if the user's wallet has money")
    //we go to next when our condition is satisfied
    if(wallet) {
        next(); 
    } else {
        res.send("Wallet is empty")
    }
}

console.log("Hello Server")

//when we open localhost:3000 on our webbrowser it will show cannont GET / as it does not know where to go
//so here we are specify what to do
app.get('/',(req, res) => {
    console.log("Hey I am at /")
    res.send("Hello I am at /") //here we can send any file we want to
})
//we are sending different sections here like how a web page has different section 
app.get('/register',(req, res) => {
    console.log("Hey I am at /")
    res.send("Register Page") //here we can send any file we want to
})

//generally in the apps we see that we can acess the page only after logging in 
//to check that middleware  is used , we have any number of middlewares 
//once middleware is success then it will go to the next middleware 
//only when all the middlewares are success it will go to the callback
app.get('/learn', middleware1, middleware2, (req, res) => {
    console.log("Hey I am learning /")
    res.send("Learning Page") 
})

app.get('/contact',(req, res) => {
    console.log("Hey I am at /")
    res.send("Contact Page") 
})
*/