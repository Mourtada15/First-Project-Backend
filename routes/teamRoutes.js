import express from 'express';

import * as teamsController from "../controllers/teamControllers.js";

const router = express.Router()

// GET all teamMembers
router.get('/', teamsController.getTeamMembers)

// GET a teamMember
router.get('/:id', teamsController.getTeamMember)

// Create a new teamMember
router.post('/', teamsController.createTeamMember)

// DELETE a teamMember
router.delete('/:id', teamsController.deleteTeamMember)

// UPDATE a teamMember
router.patch('/:id', teamsController.updateTeamMember)

export default router