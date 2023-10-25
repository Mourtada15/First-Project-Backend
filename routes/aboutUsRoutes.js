const express = require('express')
const {
    getAboutUs,
    // createAboutUs,
    updateAboutUs
} = require('../controllers/aboutUsController')

const router = express.Router()

router.get('/', getAboutUs)

// router.post('/', createAboutUs)

router.patch('/', updateAboutUs)

module.exports = router