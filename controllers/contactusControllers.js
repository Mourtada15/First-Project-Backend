import Contactus from "../models/contactusModel.js"
import mongoose from "mongoose"
// get all messages
export const getMessages = async (req, res) => {
    const messages = await Contactus.find({}).sort({createAt: -1})
    res.status(200).json(messages)
}


// get a single message
export const getMessage = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Message'})
    }

    const message = await Contactus.findById(id)

    if (!message) {
        return res.status(404).json({error: 'No such Message'})
    }

    res.status(200).json(message)
}


// send a message
export const sendMessage= async (req, res) => {
    const {email, name, message} = req.body

    // add doc to db
    try {
        const msg = await Contactus.create({email, name, message})
        res.status(200).json(msg)
    } catch (error) {
        res.status(400).json({error: error.msg})
    }
}

// delete an milestone
export const deleteMessage = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such message'})
    }

    const message = await Contactus.findOneAndDelete({_id: id})

    if (!message){
        return res.status(404).json({error: 'No such message'})
    }

    res.status(200).json(message)
}
