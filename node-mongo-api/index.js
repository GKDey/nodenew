const connection = require("./model")
//create express//
const express = require("express");
const application = express();
const path = require("path");
const expressHandlerBars = require("express-handlebars");
const bodyparser = require("body-parser");
const CourseController = require("./controllers/courses")
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

application.use(bodyparser.urlencoded({
    extended : true
}));

//template configuration//
application.set('views',path.join(__dirname,"/views/"))

//template configuration//
application.engine("hbs",expressHandlerBars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname+ "/views/layouts",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

//template configuration//
application.set("view engine","hbs")

//template configuration//
application.get("/",(req,res)=>{
    //res.send("hellow world")
    res.render("index",{})
});

application.use("/course",CourseController)

application.listen("3000",()=>{
    console.log("server started")
});