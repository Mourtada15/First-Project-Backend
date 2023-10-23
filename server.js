//imports
require('dotenv').config()
const express =require ('express')

//Import routes
const adminRoutes=require('./routes/admin')

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

//listen for requests
app.listen(process.env.PORT,()=>{
    console.log('listening on port', process.env.PORT)
})

