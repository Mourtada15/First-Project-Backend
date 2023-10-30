import express  from 'express'
import * as adminController from "../controllers/adminControllers.js";
const router = express.Router()




//register an admin
router.post('/register', adminController.registerAdmin)


//get admins
router.get('/',adminController.getAdmins)

export default router;
