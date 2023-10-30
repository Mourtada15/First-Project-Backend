import express from 'express'

import * as teamController from '../controllers/teamController.js'
const router = express.Router()

// GET all teamMembers
router.get('/', teamController.getTeamMembers)

// GET a teamMember
router.get('/:id', teamController.getTeamMember)

// Create a new teamMember
router.post('/', teamController.createTeamMember)

// DELETE a teamMember
router.delete('/:id', teamController.deleteTeamMember)

// UPDATE a teamMember
router.patch('/:id', teamController.updateTeamMember)

export default router