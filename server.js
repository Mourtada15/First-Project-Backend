//imports
import  express  from 'express'
import mongoose from 'mongoose'
// import bodyParser from "body-parser"
// import multer from 'multer'
import dotenv from "dotenv"
// import path from "path"
dotenv.config();


//Import routes
import adminRoute from "./routes/admin.js"
import aboutUsRoute from "./routes/aboutus.js"
import articleRoute from "./routes/article.js"
import contactusRoute from "./routes/contactus.js"
import milestoneRoute from "./routes/milestone.js"
import subscriberRoute from './routes/subscriber.js'
import lebEleRoute from './routes/lebneneEle.js'
import teamRoutes from './routes/teams.js'

//express app
const app = express()

//Specify where to store the app images (the images folder), and how the naming should be.
// const storage = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null,'images');
//     },
//     filename:(req,file,cb) =>{
//         cb(null, `${file.fieldname}-${Date.now()}`);
//     }
// });

//Types of file that multer could accept and parse.
// const fileFilter = (req, file, cb) => {
//     if (
//       file.mimetype === 'image/png' ||
//       file.mimetype === 'image/jpg' ||
//       file.mimetype === 'image/jpeg'
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   };


//middleware
// app.use(bodyParser.urlencoded({extended:false}))//parse form data
app.use(express.json())//parsing json data
// app.use(multer({storage:storage,fileFilter:fileFilter}).single('image'));//pa
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
app.use('/api/news', subscriberRoute);
app.use('/api/lebneneEle', lebEleRoute);
app.use('/api/team', teamRoutes)


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
        process.exit();
    })

