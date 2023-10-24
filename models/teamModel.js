const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teamSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Team', teamSchema)