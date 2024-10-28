const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const courseSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Course title is required']
    },
    semester: {
        type: String, // e.g., "Fall", "Spring"
        required: [true, 'Semester is required']
    },

   student: {
        type: String,
    }
 });

 const course = mongoose.model('course', courseSchema);
 module.exports = course;