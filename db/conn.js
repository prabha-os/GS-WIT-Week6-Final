const mongoose = require('mongoose')

//we are connecting our database here using process.env.DBURL(name of the key)
mongoose.connect(process.env.DBURL)
   .then(()=> {console.log("Database connection established")})
   .catch(err => {console.log(`${err}`)})