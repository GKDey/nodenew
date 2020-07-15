//route info//

const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const CourseModel = mongoose.model("Gaurab")
//CourseModel points to the collection Course in db//
//docs -> documents recived from Course collection//

router.get("/add",(req,res)=>{
    res.render("add-course")
})

router.post("/add",(req,res)=>{

    var course = new CourseModel();
    course.courseName = req.body.courseName
    course.courseId = req.body.courseId
    course.courseDuration = req.body.courseDuration
    course.courseFee = req.body.courseFee
    course.save((err,docs)=>{
        if(!err)
        {
            //res.redirect("/course/list")
            res.json({message :"Success", status : "OK"})
        }
        else
        {
            res.send("error occured")
        }
    });
    //res.render("add-course")
})

router.get("/list",(req,res)=>{

    //setting recs//
    // var course = new CourseModel();
    // course.courseName = "node";
    // course.courseId = "14";
    // course.courseDuration = "6";
    // course.courseFee = "6789";
    // course.save();

    CourseModel.find((err,docs)=>{

        if(!err)
        {
            // console.log(docs)
            // res.send("course controller")
            res.render("list",{data : docs})
        }


    });
    
});



module.exports = router;
