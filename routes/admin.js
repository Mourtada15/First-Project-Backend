<<<<<<< HEAD
const express = require('express')
const router = express.Router()

const {getAdmins,registerAdmin}=require('../controllers/adminControllers')
=======
import express  from 'express'
import * as adminController from "../controllers/adminControllers.js";
const router = express.Router()

>>>>>>> remotes/origin/main



//register an admin
<<<<<<< HEAD
router.post('/register', registerAdmin)


//get admins
router.get('/',getAdmins)

module.exports=router
=======
router.post('/register', adminController.registerAdmin)


//get admins
router.get('/',adminController.getAdmins)

export default router;
>>>>>>> remotes/origin/main
