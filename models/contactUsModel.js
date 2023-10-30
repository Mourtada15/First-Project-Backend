const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactUsSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('ContactUs', contactUsSchema)