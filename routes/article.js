import express from "express"
import * as articleController from "../controllers/articleControllers.js"

const router = express.Router()

// GET all articles
router.get('/', articleController.getArticles)

// GET a single article
router.get('/:id', articleController.getArticle)

// POST a new article
router.post('/', articleController.createArticle)

// DELETE an article
router.delete('/:id', articleController.deleteArticle)

// UPDATE an article
router.patch('/:id', articleController.updateArticle)

export default router;