const express = require('express');
const routes = express.Router();
const courseController = require('../controllers/courseController');

// get a list of courses from the database
routes.get('/getCourse', courseController.getCourse);

// add course to the db
routes.post('/addCourse', coursetController.addCourse);

// upgrade course in the database
routes.put('/putCourse/:id', courseController.putCourse);

// update course in the database
routes.patch('/patchCourses/:id', courseController.patchCourses)


// delete a course from the db
routes.delete('/deleteCourses/:id',  courseController.deleteCourses)


module.exports = routes;


