import mongoose from "mongoose"
const Schema=mongoose.Schema;

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

export default mongoose.model('AboutUs', aboutUsSchema);