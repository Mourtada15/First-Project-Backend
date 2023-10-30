<<<<<<< HEAD
const mongoose=require('mongoose')
=======
import mongoose from "mongoose"
>>>>>>> remotes/origin/main
const Schema=mongoose.Schema

const contactUsSchema = new Schema ({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},{timestamps: true})

<<<<<<< HEAD
module.exports=mongoose.model('Contactus', contactUsSchema)
=======
export default mongoose.model('Contactus', contactUsSchema)
>>>>>>> remotes/origin/main
