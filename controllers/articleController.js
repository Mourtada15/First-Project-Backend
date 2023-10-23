const Schema = require('../models/schemaModel')
const mongoose = require('mongoose')

// get all requestes
const getArticles = async (req, res) => {
    const articles = await Schema.find({}).sort({createAt: -1})
    res.status(200).json(articles)
}


// get a single request
const getArticle = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such article'})
    }

    const article = await Schema.findById(id)

    if (!article) {
        return res.status(404).json({error: 'No such article'})
    }

    res.status(200).json(article)
}


// create new request
const createArticle = async (req, res) => {
    const {title, body, image} = req.body

    // add doc to db
    try {
        const article = await Schema.create({title, body, image})
        res.status(200).json(article)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a request
const deleteArticle = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such article'})
    }

    const article = await Schema.findOneAndDelete({_id: id})

    if (!article) {
        return res.status(404).json({error: 'No such article'})
    }

    res.status(200).json(article)
}

// update a resquest
const updateArticle = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such article'})
    }

    const article = await Schema.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!article) {
        return res.status(404).json({error: 'No such article'})
    }

    res.status(200).json(article)
}




module.exports = {
    getArticles,
    getArticle,
    createArticle,
    deleteArticle,
    updateArticle
}