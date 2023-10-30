<<<<<<< HEAD
const mongoose=require('mongoose')
const Schema=mongoose.Schema
=======
import mongoose from "mongoose"
const Schema=mongoose.Schema;
>>>>>>> remotes/origin/main

const aboutUsSchema = new Schema ({
    image: {
        type: String,
        required: true
    },
    story: {
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
},{timestamps: true})

<<<<<<< HEAD
module.exports=mongoose.model('AboutUs', aboutUsSchema)
=======
export default mongoose.model('AboutUs', aboutUsSchema);
>>>>>>> remotes/origin/main
