import Admin from "../models/adminModel.js"
//import bcrypt to hash the pass
import bcrypt from "bcrypt"

export const getAdmins= async (req,res)=>{
    const admin= await Admin.find({})
    res.status(200).json(admin)
}

export const registerAdmin=  async (req,res)=>{
    const {username, email, password}=req.body

    //hash pass
    const saltRound=10;
    const hashedPassword=await bcrypt.hash(password,saltRound)

    try{
        const admin= await Admin.create({
            username,
            email,
            password: hashedPassword,
        })
        res.json({msg:'Admin registered successfully'});
    } catch(error){
        res.status(500).json({error: error.message})
    }
}
