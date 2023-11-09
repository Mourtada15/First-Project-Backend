import express from "express"
import * as LebEleController from '../controllers/lebneneEleControllers.js'
const router = express.Router();

router.get('/', LebEleController.getLebEle);
router.patch('/', LebEleController.updateLebEle);




export default router;