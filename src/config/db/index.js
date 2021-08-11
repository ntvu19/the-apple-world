const mongoose = require('mongoose')

async function connect() {

    try {
        await mongoose.connect('mongodb+srv://group02:7iPagNaAM2TwN0N6@tvcluster.up6kt.mongodb.net/Group02?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
    } catch (error) {
        console.log('Connect failure')
    }

}

module.exports = { connect }