const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../until/mongoose');

class SiteController {
    // [GET] /
    home(req, res, next) {
        // trả dữ liệu theo kiểu callback function
        // Course.find({}, function (err, course) {
        //     if (!err) {
        //         res.json(course)
        //     } else {
        //         res.status(400).json({ error: 'Lỗi rồi' })
        //     }
        // })

        // trả dữ liệu theo kiểu promise
        //c1:
        // Course.find({})
        //     .then((course) => res.json(course))
        //     .catch(err => next(err))

        //c2
        Course.find({})
            .then((courses) => {
                courses = mutipleMongooseToObject(courses)

                res.render('home', { courses: courses })
            })
            .catch(next)

    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
