import express from "express"
import * as subscriberController from '../controllers/subscriberControllers.js'

const router = express.Router();

router.post('/subscribe',subscriberController.addSubscriber);

router.delete('/unsubscribe',subscriberController.deleteSubscriber);

export default router;