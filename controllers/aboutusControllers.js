import AboutUs from "../models/aboutusModel.js"

export const getAboutUsContent= async(req,res)=>{
    const aboutUs = await AboutUs.findOne()
    if(!aboutUs){
        return res.status(404).json({error: "about us not found"})
    }
    res.status(200).json(aboutUs) 
}



export const updateAboutUsContent= async(req,res)=>{
    const aboutUs=await AboutUs.findOneAndUpdate({}, req.body
    )

    if (!aboutUs) {
        return res.status(404).json({error: 'No content'})
    }
    
    aboutUs.set(req.body);

    req.file && aboutUs.set({image: req.file.path})
    
    await aboutUs.save();
    res.status(200).json(aboutUs)
}