import mongoose from "mongoose"
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

export default mongoose.model('Contactus', contactUsSchema)
