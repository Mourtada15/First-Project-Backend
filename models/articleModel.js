import mongoose from "mongoose"
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
    adminId: {
        type: Schema.Types.ObjectId, ref: 'Admin',required: true //foreign key
    }
}, { timestamps: true })

export default mongoose.model('Article', articleSchema)