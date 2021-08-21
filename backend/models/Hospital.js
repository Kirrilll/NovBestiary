const mongoose = require('mongoose')

const HospitalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    // rating: {
    //     type: Number,
    //     required: true,
    //     min: 0,
    //     max: 5
    // },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Hospital', HospitalSchema)