//imports
import  express  from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import multer from 'multer'
import dotenv from "dotenv"
import path from "path"
dotenv.config();

//Import routes
import adminRoute from "./routes/admin.js"
import aboutUsRoute from "./routes/aboutus.js"
import articleRoute from "./routes/article.js"
import contactusRoute from "./routes/contactus.js"
import milestoneRoute from "./routes/milestone.js"
import subscriberRoute from './routes/subscriber.js'
import lebEleRoute from './routes/lebneneEle.js'
import teamRoutes from './routes/teamRoutes.js'

import Admin from "./models/adminModel.js";

import cors from "cors";

//express app
const app = express()

//Specify where to store the app images (the images folder), and how the naming should be.
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'images');
    },
    filename:(req,file,cb) =>{
        cb(null, `${file.originalname}`);
    }
});

//Types of file that multer could accept and parse.
const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

const upload= multer({storage:storage,fileFilter:fileFilter});


//middleware
app.use(bodyParser.urlencoded({extended:false}))//parse form data
app.use(express.json())//parsing json data
app.use(cors('*'));
app.use(upload.single('image'));//parsing files
app.use('/images',express.static('images'));//specify where express should looks for static files

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})
//Admin middleware 
app.use(async (req,res,next)=>{
    const admin = await Admin.findOne();
    if(!admin){
        return res.status(400).json({message:"Admin not found"});
    }
    req.admin=admin;
    next();
})
app.use((req,res,next)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods','*');
  next();
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