<<<<<<< HEAD
const express = require('express')
const {
    getMilestones,
    getMilestone,
    createMilestone,
    deleteMilestone,
    updateMilestone
} = require('../controllers/milestoneController')
=======
import express from "express"

import * as milestoneController from "../controllers/milestoneControllers.js";
>>>>>>> remotes/origin/main

const router = express.Router()

// GET all articles
<<<<<<< HEAD
router.get('/', getMilestones)

// GET a single article
router.get('/:id', getMilestone)

// POST a new article
router.post('/', createMilestone)

// DELETE an article
router.delete('/:id', deleteMilestone)

// UPDATE an article
router.patch('/:id', updateMilestone)

module.exports = router
=======
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
>>>>>>> remotes/origin/main
