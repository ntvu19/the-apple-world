class HomeController {

    // [GET] /
    index(req, res, next) {
        res.render('home')
    }

}

module.exports = new HomeController()