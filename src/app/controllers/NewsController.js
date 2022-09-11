class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    // [GET] /news/:slug
    show(req, res) {
        res.send("Đây là Page detail");
    }
}
module.exports = new NewsController;