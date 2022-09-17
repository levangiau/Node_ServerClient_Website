const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
    // router

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // }) ==> chuyển lại như ở dưới
    app.use('/courses', courseRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
