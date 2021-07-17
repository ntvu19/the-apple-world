const newsRouter = require('./news')
const homeRouter = require('./home.route')
const iphoneRouter = require('./iphone.route')
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

    app.use('/iphone', iphoneRouter)
    app.use('/', homeRouter)

}

module.exports = route