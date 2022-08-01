const mongoose = require('mongoose')

const deviceSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    pid: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    vpn: {
        type: String,
        require: true
    },
    anydesk: {
        type: String,
        require: true
    },
    board: {
        type: String,
        require: true
    },
    camera: {
        type: String,
        require: true
    },
    serialCamera: {
        type: String,
        require: true
    },
    ocrCamera: {
        type: String,
        require: true
    },
    externalCamera: {
        type: String,
        require: true
    },
    ipExternalCamera: {
        type: String,
        require: true
    },
    versionCubiQ: {
        type: String,
        require: true
    },
    versionCubiQ_one: {
        type: String,
        require: true
    },
    versionMiddelware: {
        type: String,
        require: true
    },
    keywords: {
        type: Array,
        require: true
    }
})

module.exports = mongoose.model('devices', deviceSchema)