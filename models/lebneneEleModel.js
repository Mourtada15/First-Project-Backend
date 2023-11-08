import mongoose from "mongoose";

const LebEleSchema = new mongoose.Schema({
    
    story:{
        type:String,
        required:true
    },
    ourLibrary:{
        type:String,
        required:true
    }
})

export default mongoose.model("lebneneEle",LebEleSchema);