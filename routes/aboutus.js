<<<<<<< HEAD
const express= require('express')
const router = express.Router()
const{getAboutUsContent,updateAboutUsContent}= require('../controllers/aboutusControllers')

//get content
router.get('/',getAboutUsContent )


// update content
router.patch('/',updateAboutUsContent)


module.exports = router
=======
import express from "express";
import * as aboutUsController from "../controllers/aboutusControllers.js";
const router = express.Router()

//get content
router.get('/',aboutUsController.getAboutUsContent )


// update content
router.patch('/',aboutUsController.updateAboutUsContent)


export default router;
>>>>>>> remotes/origin/main
