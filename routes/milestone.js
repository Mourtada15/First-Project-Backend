import express from "express"

import * as milestoneController from "../controllers/milestoneControllers.js";

const router = express.Router()

// GET all articles
router.get('/', milestoneController.getMilestones)

// GET a single article
router.get('/:id', milestoneController.getMilestone)

// POST a new article
router.post('/', milestoneController.createMilestone)

// DELETE an article
router.delete('/:id', milestoneController.deleteMilestone)

// UPDATE an article
router.patch('/:id', milestoneController.updateMilestone)

export default router;