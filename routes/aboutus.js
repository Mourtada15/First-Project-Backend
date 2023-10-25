const express= require('express')
const router = express.Router()
const{getAboutUsContent,updateAboutUsContent}= require('../controllers/aboutusControllers')

//get content
router.get('/',getAboutUsContent )


// update content
router.patch('/',updateAboutUsContent)


module.exports = router