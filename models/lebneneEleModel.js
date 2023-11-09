import mongoose from "mongoose";
const Schema = mongoose.Schema;


const LebEleSchema = new Schema ({
    image: {
        type: String,
        required: true
    },
    story:{
        type: String,
        required: true
    },
    ourLibrary:{
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model("LebneneEle", LebEleSchema);