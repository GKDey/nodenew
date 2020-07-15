//install dependencies --npm install --save express express-handlebars nodemon mongoose body-parser//
//connect nodejs to mongodb: mongoose -> adapter to connect,//
//create models : are for creating schema and getting data and accessing data from a particular collection//
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/People",{ useNewUrlParser: true , useUnifiedTopology: true },(error)=>{
    if(!error)
      {
        console.log("Success connected")
      }
    else
      {
        console.log("FAILURE...connecting to DB")
      }
});


const Course =require("./courses.model");