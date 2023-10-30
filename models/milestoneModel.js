import mongoose from "mongoose"
const Schema=mongoose.Schema

const milestoneSchema = new Schema ({
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
},{timestamps: true})

export default mongoose.model('Milestone', milestoneSchema)
