<<<<<<< HEAD
const mongoose=require('mongoose')
=======
import mongoose from "mongoose"
>>>>>>> remotes/origin/main
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
        type: Schema.Types.ObjectId, ref: 'Admin',required: true //foreign key
    }
}, { timestamps: true })

<<<<<<< HEAD
module.exports = mongoose.model('Article', articleSchema)
=======
export default mongoose.model('Article', articleSchema)
>>>>>>> remotes/origin/main
