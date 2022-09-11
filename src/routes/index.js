const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // router

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // }) ==> chuyển lại như ở dưới
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

}

module.exports = route;