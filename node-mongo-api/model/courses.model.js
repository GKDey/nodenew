const mongoose = require("mongoose");


//create schema//
var CourseSchema = new mongoose.Schema({
    courseName : {
        type : String,
        required : "Required",      
    },
    courseId   : {
        type : String,  
    },
    courseDuration  : {
        type : String,  
    },
    courseFee  : {
        type : String,  
    }
}
);


//define schema as a model for mongoose//  //first collection name then schema //
mongoose.model("Gaurab",CourseSchema)