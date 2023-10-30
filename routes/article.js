<<<<<<< HEAD
const express = require('express')
const {
    getArticles,
    getArticle,
    createArticle,
    deleteArticle,
    updateArticle
} = require('../controllers/articleControllers')
=======
import express from "express"
import * as articleController from "../controllers/articleControllers.js"
>>>>>>> remotes/origin/main

const router = express.Router()

// GET all articles
<<<<<<< HEAD
router.get('/', getArticles)

// GET a single article
router.get('/:id', getArticle)

// POST a new article
router.post('/', createArticle)

// DELETE an article
router.delete('/:id', deleteArticle)

// UPDATE an article
router.patch('/:id', updateArticle)

module.exports = router
=======
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
>>>>>>> remotes/origin/main
