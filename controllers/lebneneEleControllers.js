import LebEle from '../models/lebneneEleModel.js'

export const updateStory = async(req,res,next) =>{
    const {content} = req.body;
    try{
    await LebEle.findOneAndUpdate({},{story:content});
    res.status(200).json({message:"Stroy updated successfully"});
    }catch(err){
        console.log(err);
    res.status(500).json({error: err.message})
    }

}