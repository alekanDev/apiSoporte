const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    compay: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('reports', reportSchema)