import express from "express";
import * as aboutUsController from "../controllers/aboutusControllers.js";
const router = express.Router()

//get content
router.get('/',aboutUsController.getAboutUsContent )


// update content
router.patch('/',aboutUsController.updateAboutUsContent)


export default router;
