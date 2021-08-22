const homeRouter = require('./home.route')
const iphoneRouter = require('./iphone.route')
const tabletRouter = require('./tablet.route')
const macbookRouter = require('./macbook.route')
const imacRouter = require('./imac.route')
const applewatchRouter = require('./applewatch.route')
const airpodRouter = require('./airpod.route')
const adminRouter = require('./admin.route')
const orderRouter = require('./order.route')

const coursesRouter = require('./courses')
const meRouter = require('./me')

function route(app) {

    app.use('/me', meRouter)
    app.use('/courses', coursesRouter)

    app.use('/order', orderRouter)
    app.use('/admin', adminRouter)
    app.use('/airpod', airpodRouter)
    app.use('/apple-watch', applewatchRouter)
    app.use('/imac', imacRouter)
    app.use('/macbook', macbookRouter)
    app.use('/tablet', tabletRouter)
    app.use('/iphone', iphoneRouter)
    app.use('/', homeRouter)

}

module.exports = route