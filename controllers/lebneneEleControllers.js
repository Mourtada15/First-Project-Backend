import LebEle from '../models/lebneneEleModel.js'

// export const updateStory = async(req,res,next) =>{
//     const {content} = req.body;
//     try{
//     await LebEle.findOneAndUpdate({},{story:content});
//     res.status(200).json({message:"Stroy updated successfully"});
//     }catch(err){
//         console.log(err);
//     res.status(500).json({error: err.message})
//     }

// }

export const getLebEle = async (req,res) => {
    const lebEle = await LebEle.findOne()
    if(!lebEle){
        return res.status(404).json({error: "Page not found"})
    }
    res.status(200).json(lebEle)
}


export const updateLebEle = async(req,res) => {
    const lebEle = await LebEle.findOneAndUpdate({}, req.body
    )

    if (!lebEle) {
        return res.status(404).json({error: 'No content'})
    }
    lebEle.set(req.body);
    
    req.file && lebEle.set({image: req.file.path})

    await lebEle.save();
    res.status(200).json(lebEle)
}
