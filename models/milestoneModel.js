import mongoose from "mongoose"
const Schema=mongoose.Schema

const milestoneSchema = new Schema ({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
},{timestamps: true})

export default mongoose.model('Milestone', milestoneSchema)