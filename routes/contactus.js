import express from "express"
import * as contactUsController from "../controllers/contactusControllers.js"

const router = express.Router()

// GET all Messages
router.get('/', contactUsController.getMessages)

// GET a single Message
router.get('/:id', contactUsController.getMessage)

// Send a Message
router.post('/', contactUsController.sendMessage)

// DELETE a Message
router.delete('/:id', contactUsController.deleteMessage)


export default router;
