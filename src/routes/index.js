const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    // router

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // }) ==> chuyển lại như ở dưới
    app.use('/me', meRouter);
    app.use('/courses', courseRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
