const AboutUs = require('../models/aboutUsModel')
const mongoose = require('mongoose')

const getAboutUs = async (req, res) => {
    const aboutUs = await AboutUs.find({})
    res.status(200).json(aboutUs)
}

// // create About Us once
// const createAboutUs = async (req, res) => {
//     const {image, ourStory, vision, mission} = req.body

//     // add doc to db
//     try {
//         const aboutUs = await AboutUs.create({image, ourStory, vision, mission})
//         res.status(200).json(aboutUs)
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// }


const updateAboutUs = async (req, res) => {
    try {
        // Assuming the aboutus is created once and the admin will have access to only update it
        const aboutUs = await AboutUs.findOne(); 

        if (!aboutUs) {
            return res.status(404).json({ message: "About Us not found." });
        }

        // Update the aboutus document with the request body.
        aboutUs.set(req.body);
        await aboutUs.save();

        return res.status(200).json(aboutUs);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


module.exports = {
    getAboutUs,
    // createAboutUs,
    updateAboutUs
}