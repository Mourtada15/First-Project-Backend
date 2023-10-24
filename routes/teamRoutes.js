const express = require('express')
const {
    getTeamMembers,
    getTeamMember,
    createTeamMember,
    deleteTeamMember,
    updateTeamMember
} = require('../controllers/teamController')

const router = express.Router()

// GET all teamMembers
router.get('/', getTeamMembers)

// GET a teamMember
router.get('/:id', getTeamMember)

// Create a new teamMember
router.post('/', createTeamMember)

// DELETE a teamMember
router.delete('/:id', deleteTeamMember)

// UPDATE a teamMember
router.patch('/:id', updateTeamMember)

module.exports = router