const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    id: {
        type: Number,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    keywords: {
        type: Array,
        require: true
    }
})

module.exports = mongoose.model('companies', companySchema)