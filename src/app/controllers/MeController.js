const Course = require('../models/Course');
const { mongooseToObject, mutipleMongooseToObject } = require('../../until/mongoose');

class MeController {

    // [GET] /me/stored/courses
    storeCourses(req, res, next) {
        /**
         * Do gọi liền 2 promise nên trong js nó sẽ bất đồng bộ
         * nên ta phải làm cho nó theo trình tự nhất định
         */
        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log("deletedCount",deletedCount)
        //     })
        //     .catch(next);

        // Course.find({})
        //     .then((course) => {
        //         course = mutipleMongooseToObject(course)
        //         res.render('me/store-courses', { courses: course })
        //     })
        //     .catch(next);

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            /**
             * các promise trong all này sẽ thực hiện đồng thời 2 promise cùng lúc và sẽ trả về kết quả đồng thời
             * như ở dưới đây
             */
            .then(([course, deletedCount]) => {
                course = mutipleMongooseToObject(course)
                res.render('me/store-courses', { courses: course, deletedCount: deletedCount })
            })
            .catch(next)
    }
    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((course) => {
                course = mutipleMongooseToObject(course)
                res.render('me/trash-courses', { courses: course })
            })
            .catch(next);
    }
}
module.exports = new MeController();
