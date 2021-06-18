class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAILS')
    }

}

// Exports cái gì thì khi require sẽ nhận được cái đó
module.exports = new NewsController