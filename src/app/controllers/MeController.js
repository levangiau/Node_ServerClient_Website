const Course = require('../models/Course');
const { mongooseToObject, mutipleMongooseToObject } = require('../../until/mongoose');

class MeController {

    // [GET] /me/stored/courses
    storeCourses(req, res, next) {
        Course.find({})
            .then((course) => {
                course = mutipleMongooseToObject(course)
                res.render('me/store-courses', { courses: course })
            })
            .catch(next);

    }
}
module.exports = new MeController();
