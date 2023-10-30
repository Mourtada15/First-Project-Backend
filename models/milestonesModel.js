const mongoose = require('mongoose')

const Schema = mongoose.Schema

const milestonesSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Milestone', milestonesSchema)