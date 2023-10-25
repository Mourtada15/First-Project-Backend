const AboutUs= require('../models/aboutusModel')
const mongoose= require('mongoose')


const getAboutUsContent= async(req,res)=>{
    const aboutUs = await AboutUs.findOne()
    if(!aboutUs){
        return res.status(404).json({error: "about us not found"})
    }
    res.status(200).json(aboutUs)
}

//git pull

const updateAboutUsContent= async(req,res)=>{
    const aboutUs=await AboutUs.findOneAndUpdate({}, req.body
    )

    if (!aboutUs) {
        return res.status(404).json({error: 'No content'})
    }
    aboutUs.set(req.body);
    await aboutUs.save();
    res.status(200).json(aboutUs)
}
//const updateAboutUs = async (req, res) => {
//     try {
//         // Assuming the aboutus is created once and the admin will have access to only update it
//         const aboutUs = await AboutUs.findOne(); 

//         if (!aboutUs) {
//             return res.status(404).json({ message: "About Us not found." });
//         }

//         // Update the aboutus document with the request body.
//         aboutUs.set(req.body);
//         await aboutUs.save();

//         return res.status(200).json(aboutUs);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// }


module.exports = {
    getAboutUsContent,
    updateAboutUsContent
}