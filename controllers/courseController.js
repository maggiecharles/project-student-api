const course = require('../models/coursesModel')


module.exports={

// --------------------------post courses----------------------------

    addCourse: async(req,res, next) => {

        // console.log(req.body);
        // res.send(req.body)
        try {
            const course = new Course(req.body)
            const result = await course.save();
            res.send(result)
        }
        catch (error) {
            console.log(error.message);
            
        }
    },


// --------------------------get course----------------------------

    getCourse: async (req, res, next) => {
        try {
            const courses = await Course.find();  // Fetch all courses from the DB
            res.send(courses);
            next();  // Optional: Use if middleware comes after this
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error");
        }
    },

// --------------------------update courses----------------------------
    putCourse: async (req, res, next) => {
        try {
            const id = req.params.id;
            const update = req.body;
            const options = { new: true };  // To return the updated document
            const updatedCourse = await Course.findByIdAndUpdate(id, update, options);
            
            if (!updatedCourse) {
                return res.status(404).send("Course not found");
            }
    
            res.send(updatedCourse);
            next();  // Optional: Use if middleware comes after this
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error");
        }
    },



// --------------------------patch courses----------------------------


    patchCourses:   async(req, res, next)=>{
        try{
            const id = req.params.id;
            const update = req.body;
            const options = {new: true}
            const result = await Student.findByIdAndUpdate(id, update, options)
    
            res.send(result)
        }
        catch(error){
            console.log(error.message);
            
        }
    },



// --------------------------delete courses----------------------------



    deleteCourses: async(req, res, next)=>{


        const id = req.params.id
        try{
            const course = await Course.findByIdAndDelete(id)
            res.send(course);
            next()
        }
        catch(error){
            console.log(error.message);
            
        }
    
    
    }






}