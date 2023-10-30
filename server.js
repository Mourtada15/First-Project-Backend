require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const articleRoutes = require('./routes/articleRoutes')
const teamRoutes = require('./routes/teamRoutes')
const aboutUsRoutes = require('./routes/aboutUsRoutes')
const milestonesRoutes = require('./routes/milestonesRoutes')
const contactUsRoutes = require('./routes/contactUsRoutes')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/article', articleRoutes)
app.use('/api/team', teamRoutes)
app.use('/api/aboutus', aboutUsRoutes)
app.use('/api/milestones', milestonesRoutes)
app.use('/api/contactus', contactUsRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

