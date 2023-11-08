import Milestone from "../models/milestoneModel.js"
import mongoose from "mongoose"

// get all milestones
export const getMilestones = async (req, res) => {
    const milestones = await Milestone.find({}).sort({createAt: -1})
    res.status(200).json(milestones)
}


// get a single milestone
export const getMilestone = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Milestone'})
    }

    const milestone = await Milestone.findById(id)

    if (!milestone) {
        return res.status(404).json({error: 'No such Milestone'})
    }

    res.status(200).json(milestone)
}


// create new milestone
export const createMilestone = async (req, res) => {
    const {title, body, date} = req.body
    const image = req.file;

    // add doc to db
    try {
        const milestone = await Milestone.create({title: title, body: body, date: date, image: image.path})
        res.status(200).json(milestone)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete an milestone
export const deleteMilestone = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such milestone'})
    }

    const milestone = await Milestone.findOneAndDelete({_id: id})

    if (!milestone){
        return res.status(404).json({error: 'No such milestone'})
    }

    res.status(200).json(milestone)
}

// update an milestone
export const updateMilestone = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such milestone'})
    }

    const milestone = await Milestone.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!milestone) {
        return res.status(404).json({error: 'No such milestone'})
    }

    res.status(200).json(milestone)
}
