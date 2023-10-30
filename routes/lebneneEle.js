import express from "express"
import * as LebEleController from '../controllers/lebneneEleControllers.js'

const router = express.Router();

router.post('/updateStory',LebEleController.updateStory);


export default router;