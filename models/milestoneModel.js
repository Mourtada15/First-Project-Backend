<<<<<<< HEAD
const mongoose=require('mongoose')
=======
import mongoose from "mongoose"
>>>>>>> remotes/origin/main
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

<<<<<<< HEAD
module.exports=mongoose.model('Milestone', milestoneSchema)
=======
export default mongoose.model('Milestone', milestoneSchema)
>>>>>>> remotes/origin/main
