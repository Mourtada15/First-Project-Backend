<<<<<<< HEAD
const express = require('express')
const {
    getMessages,
    getMessage,
    sendMessage,
    deleteMessage
} = require('../controllers/contactusContorllers')
=======
import express from "express"
import * as contactUsController from "../controllers/contactusControllers.js"
>>>>>>> remotes/origin/main

const router = express.Router()

// GET all Messages
<<<<<<< HEAD
router.get('/', getMessages)

// GET a single Message
router.get('/:id', getMessage)

// Send a Message
router.post('/', sendMessage)

// DELETE a Message
router.delete('/:id', deleteMessage)


module.exports = router
=======
router.get('/', contactUsController.getMessages)

// GET a single Message
router.get('/:id', contactUsController.getMessage)

// Send a Message
router.post('/', contactUsController.sendMessage)

// DELETE a Message
router.delete('/:id', contactUsController.deleteMessage)


export default router;
>>>>>>> remotes/origin/main
