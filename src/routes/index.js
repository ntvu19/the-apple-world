const newsRouter = require('./news')
const siteRouter = require('./site')
const coursesRouter = require('./courses')
const cartRouter = require('./cart')
const productRouter = require('./product')
const meRouter = require('./me')

function route(app) {

    app.use('/cart', cartRouter)
    app.use('/product', productRouter)
    app.use('/news', newsRouter)
    app.use('/me', meRouter)
    app.use('/courses', coursesRouter)
    app.use('/', siteRouter)

}

module.exports = route