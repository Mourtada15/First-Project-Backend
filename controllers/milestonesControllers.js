const Milestone = require('../models/milestonesModel')
const mongoose = require('mongoose')

const getMilestones = async (req, res) => {
    const milestones = await Milestone.find({}).sort({createAt: -1})
    res.status(200).json(milestones)
}


const getMilestone = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such event'})
    }

    const milestone = await Milestone.findById(id)

    if (!milestone) {
        return res.status(404).json({error: 'No such event'})
    }

    res.status(200).json(milestone)
}


const createMilestone = async (req, res) => {
    const {image, text} = req.body

    // add doc to db
    try {
        const milestone = await Milestone.create({image, text})
        res.status(200).json(milestone)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteMilestone = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such event'})
    }

    const milestone = await Milestone.findOneAndDelete({_id: id})

    if (!milestone) {
        return res.status(404).json({error: 'No such event'})
    }

    res.status(200).json(milestone)
}

const updateMilestone = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such event'})
    }

    const milestone = await Milestone.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!milestone) {
        return res.status(404).json({error: 'No such event'})
    }

    res.status(200).json(milestone)
}


module.exports = {
    getMilestones,
    getMilestone,
    createMilestone,
    deleteMilestone,
    updateMilestone
}