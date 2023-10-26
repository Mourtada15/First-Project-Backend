const express = require('express')
const {
    getMessages,
    getMessage,
    sendMessage,
    deleteMessage
} = require('../controllers/contactusContorllers')

const router = express.Router()

// GET all Messages
router.get('/', getMessages)

// GET a single Message
router.get('/:id', getMessage)

// Send a Message
router.post('/', sendMessage)

// DELETE a Message
router.delete('/:id', deleteMessage)


module.exports = router