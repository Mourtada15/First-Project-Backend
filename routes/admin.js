const express = require('express')
const router = express.Router()

const {getAdmins,registerAdmin}=require('../controllers/adminControllers')



//register an admin
router.post('/register', registerAdmin)


//get admins
router.get('/',getAdmins)

module.exports=router