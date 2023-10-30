const express = require('express')
const {
    getMilestones,
    getMilestone,
    createMilestone,
    deleteMilestone,
    updateMilestone
} = require('../controllers/milestonesControllers')

const router = express.Router()

router.get('/', getMilestones)

router.get('/:id', getMilestone)

router.post('/', createMilestone)

router.delete('/:id', deleteMilestone)

router.patch('/:id', updateMilestone)

module.exports = router