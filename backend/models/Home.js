const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Home', HomeSchema)