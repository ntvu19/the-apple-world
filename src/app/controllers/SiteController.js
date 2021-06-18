class SiteController {

    // [GET] /
    index(req, res) {
        res.render('home')
    }

}

// Exports cái gì thì khi require sẽ nhận được cái đó
module.exports = new SiteController