const mongoose=require('mongoose')
const Schema=mongoose.Schema


const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required:true
    },
    admin: {
        type: Schema.Types.ObjectId, ref: 'Admin',required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Article', articleSchema)