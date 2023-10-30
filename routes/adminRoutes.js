const express = require('express')
const {
    getAdmin,
    patchAdmin
} = require('../controllers/adminController')

const router = express.Router()

router.get('/:id', getAdmin)

router.patch('/', patchAdmin)

module.exports = router