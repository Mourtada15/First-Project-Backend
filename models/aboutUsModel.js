const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AboutUsSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    ourStory: {
        type: String,
        required: true
    },
    vision: {
        type: String,
        required: true
    },
    mission: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('AboutUs', AboutUsSchema)