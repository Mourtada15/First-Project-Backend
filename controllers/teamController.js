const Team = require('../models/teamModel')
const mongoose = require('mongoose')

// get all teamMembers
const getTeamMembers = async (req, res) => {
    const teamMembers = await Team.find({}).sort({createAt: -1})
    res.status(200).json(teamMembers)
}


// get a teamMember
const getTeamMember = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Team member not found'})
    }

    const teamMember = await Team.findById(id)

    if (!teamMember) {
        return res.status(404).json({error: 'Team member not found'})
    }

    res.status(200).json(teamMember)
}


// create new teamMember
const createTeamMember = async (req, res) => {
    const {image, name, title} = req.body

    // add doc to db
    try {
        const teamMember = await Team.create({image, name, title})
        res.status(200).json(teamMember)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a teamMember
const deleteTeamMember = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Team member not found'})
    }

    const teamMember = await Team.findOneAndDelete({_id: id})

    if (!teamMember) {
        return res.status(404).json({error: 'Team member not found'})
    }

    res.status(200).json(teamMember)
}

// update a teamMember
const updateTeamMember = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Team member not found'})
    }

    const teamMember = await Team.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!teamMember) {
        return res.status(404).json({error: 'Team member not found'})
    }

    res.status(200).json(teamMember)
}

module.exports = {
    getTeamMembers,
    getTeamMember,
    createTeamMember,
    deleteTeamMember,
    updateTeamMember
}