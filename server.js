//imports
require('dotenv').config()
const express =require ('express')
const mongoose = require('mongoose')


//Import routes
const adminRoutes=require('./routes/admin')
const articleRoute =require('./routes/article')
//express app
const app = express()

//middleware
app.use(express.json())//parsing data

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})


//trying get request
// app.get('/',(req,res)=>{
//     res.json({msg:'Welcome to the LebnenEle'})
// })

//routes
app.use(process.env.ADMIN_PATH,adminRoutes)
app.use('/api/article',articleRoute)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{//listen for requests
    app.listen(process.env.PORT,()=>{
        console.log('Connected to db & listening on port', process.env.PORT)
    })})
.catch((error)=>{
    console.log(error)
    process.exit()
})


