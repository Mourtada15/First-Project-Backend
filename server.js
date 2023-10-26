//imports
import  express  from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config();


//Import routes
import adminRoute from "./routes/admin.js"
import aboutUsRoute from "./routes/aboutus.js"
import articleRoute from "./routes/article.js"
import contactusRoute from "./routes/contactus.js"
import milestoneRoute from "./routes/milestone.js"

//express app
const app = express()

//middleware
app.use(bodyParser.urlencoded({extended:false}))//parse form data
app.use(express.json())//parsing json data

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/admin',adminRoute)
app.use('/api/article',articleRoute)
app.use('/api/about-us', aboutUsRoute)
app.use('/api/milestone', milestoneRoute)
app.use('/api/contact-us', contactusRoute)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{//listen for requests
    app.listen(process.env.PORT,()=>{
        console.log(`Starting server at port ${process.env.PORT}`);
    })})
.catch((error)=>{
    console.log(error);
    process.exit();
})