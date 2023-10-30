const ContactUs = require('../models/contactUsModel')
const mongoose = require('mongoose')

const getContactUss = async (req, res) => {
    const contactUss = await ContactUs.find({}).sort({createAt: -1})
    res.status(200).json(contactUss)
}

const getContactUs = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Form does not exist'})
    }

    const contactUs = await ContactUs.findById(id)

    if (!contactUs) {
        return res.status(404).json({
            status: 400,
            message: `error ${error.message}`,
            data: null
        })
    }

    // res.status(200).json(contactUs)
    res.status(200).json({
        status: 200,
        message: "successfully returned",
        data: contactUs
    })

}


const createContactUs = async (req, res) => {
    const {email, name, message} = req.body

    // add doc to db
    try {
        const contactUs = await ContactUs.create({email, name, message})
        res.status(200).json(contactUs)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteContactUs = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Form does not exist'})
    }

    const contactUs = await ContactUs.findOneAndDelete({_id: id})

    if (!contactUs) {
        return res.status(404).json({error: 'Message does not exist'})
    }

    res.status(200).json(contactUs)
}


module.exports = {
    getContactUss,
    getContactUs,
    createContactUs,
    deleteContactUs
}