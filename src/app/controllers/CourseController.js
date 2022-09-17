const Course = require('../models/Course');
const { mongooseToObject } = require('../../until/mongoose');

class CourseController {

    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                // res.json(course)
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next);
    }
    // [GET] /course/create
    create(req, res, next) {
        res.render('courses/create')
    }
    // [POST] /course/store
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
        const course = new Course(formData);
        // c1: dùng callback function
        // course.save(function (err) {
        //     if (err) {
        //         res.send("Lỗi khi tạo mới dữ liệu!")
        //     } else {
        //         res.redirect("/")
        //     }
        // });
        //c2: dùng promise 
        course.save()
            .then(() => {
                res.redirect("/")
            })
            .catch(error => {
                res.send("Lỗi khi tạo mới dữ liệu!")
            });
    }
}
module.exports = new CourseController();
