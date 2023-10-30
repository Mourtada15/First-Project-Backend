const express = require('express')
const {
    getContactUss,
    getContactUs,
    createContactUs,
    deleteContactUs
} = require('../controllers/contactUsController')

const router = express.Router()

router.get('/', getContactUss)

router.get('/:id', getContactUs)

router.post('/', createContactUs)

router.delete('/:id', deleteContactUs)

module.exports = router